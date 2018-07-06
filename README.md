# Ogre Scripts support

Syntax highlighting for [Ogre Scripts](https://ogrecave.github.io/ogre/api/latest/_scripts.html) in Atom and VSCode.

Based on the [Sublime Plugin](https://github.com/TheSHEEEP/ST-OgreScripts). Extended for particle scripts.

Supports symbol outline and colour picking for .material files on VSCode.

**Ogre1 Materials**  
![](https://raw.githubusercontent.com/paroj/language-ogre-script/master/preview1.png)

**Ogre2 Materials**  
![](https://raw.githubusercontent.com/paroj/language-ogre-script/master/preview2.png)

## Structure
* ogre-common: grammar present in all ogre script files
  * ogre-material: material specific grammar
  * ogre-particle: particle specific grammar
  * ogre-compositor: compositor specific grammar
  * ogre-overlay: overlay specific grammar

## TODO
* refactor the plugin to work on tokens. Currently it tries to verify property values, which causes code duplication and does not cope with variables (`$foo`)
* font definition scripts
* split more of ogre-common into script specific files to reduce false positives
