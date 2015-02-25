# Ogre Scripts support in Atom

Syntax highlighting for [Ogre Scripts](http://www.ogre3d.org/docs/manual/manual_13.html#Scripts).

Based on the [Sublime Plugin](https://github.com/TheSHEEEP/ST-OgreScripts). Extended for particle scripts.

## Structure
* ogre-common: grammar present in all ogre script files
  * ogre-material: material specific grammar
  * ogre-particle: particle specific grammar
  * ogre-compositor: compositor specific grammar

## TODO
* refactor the plugin to work on tokens. Currently it tries to verify property values, which causes code duplication and does not cope with variables (`$foo`)
* overlay scripts
* font definition scripts
* split more of ogre-common into script specific files to reduce false positives
