'use strict'

var vscode = require('vscode')

const documentSelector = ["ogre-material-script"]

class SymbolProvider {
    provideDocumentSymbols(document, token) {
        var ret = new Array()
        var re = /\b(material|(?:geometry|vertex|fragment|compute|tessellation_hull|tessellation_domain)_program)\b\s+(\S+)/

        for (var i = 0; i < document.lineCount; i++) {
            var line = document.lineAt(i)
            var match = line.text.match(re)
            if (match) {
                ret.push(new vscode.DocumentSymbol(
                    match[2],
                    match[1],
                    match[1] == "material" ? vscode.SymbolKind.Class : vscode.SymbolKind.Object,
                    line.range,
                    line.range
                ))
            }
        }
        return ret
    }
}

class ColorProvider {
    provideDocumentColors(document, token) {
        var ret = new Array()
        var re = /\b(ambient|diffuse|specular|emissive)\s(.+)/

        for (var i = 0; i < document.lineCount; i++) {
            var line = document.lineAt(i)
            var match = line.text.match(re)
            if (match) {
                var v = match[2].split(" ", 4).map(x => +x)
                if (v.length < 3) continue // e.g. vertexcolour
                if (v.length < 4) v.push(1)

                var range = new vscode.Range(i, match.index + match[1].length + 1, i, line.text.length)

                ret.push({
                    color: new vscode.Color(...v),
                    range: range
                })
            }
        }
        return ret
    }

    provideColorPresentations(c, context, token) {
        var vals = [c.red, c.green, c.blue, c.alpha].map(x => x.toFixed(3))
        return [new vscode.ColorPresentation(vals.join(" "))]
    }
}

function activate(ctx) {
    ctx.subscriptions.push(
        vscode.languages.registerDocumentSymbolProvider(
            documentSelector, new SymbolProvider()))
    ctx.subscriptions.push(
        vscode.languages.registerColorProvider(
            documentSelector, new ColorProvider()))
}

Object.defineProperty(exports, "__esModule", { value: true })
exports.activate = activate