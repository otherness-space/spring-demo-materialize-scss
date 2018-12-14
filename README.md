# Read Me

## Contents

##### [About](#about-) \| [Who](#who-) \| [What](#what-) \| [Where](#where-) \| [Why](#why-) \| [How](#how-)

#### [Notes](#notes-)

##### [Note 1](#note-1-) \| [Note 2](#note-2-)

#### [Appendix](#appendix-)

##### [.gitattributes](#gitattributes-) \| [.gitignore](#gitignore-) \| [.exclude](#exclude-)

### [Credits](#credits-)

* * *

## About [≪](#read-me)

This is a starter repo.

### Who [≪](#read-me)

Your Mom's blank repo.

### What [≪](#read-me)

Spring Demo 2019

-   [x] A
-   [ ] B
    -   [ ] C
    -   [ ] D
-   [ ] E

### Where [≪](#read-me)

Built local with an Atom editor on a Win 10 64 host and `git` on a VboxVM for an Ubuntu guest .

### Why [≪](#read-me)

Blank

### How [≪](#read-me)

* * *

## Notes [≪](#read-me)

### Note 1 [≪](#read-me)

### Note 2 [≪](#read-me)

* * *

## Appendix [≪](#read-me)

### .gitattributes [≪](#read-me)

> Git attribute data also allows you to do some interesting things when exporting an archive of your project.

```markdown
.git                    export-ignore
.gitignore              export-ignore
.gitattributes          export-ignore
.travis.yml             export-ignore
codesniffer.ruleset.xml export-ignore
```

<https://git-scm.com/book/en/v2/Customizing-Git-Git-Attributes#Exporting-Your-Repository>

### .gitignore [≪](#read-me)

```*~
_site
.sass-cache
node_modules
# blank*
# assets/vendor

####################################################
# https://help.github.com/articles/ignoring-files/ #
####################################################

###################
# Compiled source #
###################
*.com
*.class
*.dll
*.exe
*.o
*.so

############
# Packages #
############
# it's better to unpack these files and commit the raw source
# git has its own built in compression methods
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

######################
# Logs and databases #
######################
*.log
*.sql
*.sqlite

######################
# OS generated files #
######################
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
*.nfo

##################
# Ruby.gitignore #
##################

Gemfile
/tmp/

## Environment normalization:
/.bundle/
/vendor/bundle
/lib/bundler/man/

# for a library or gem, you might want to ignore these files since the code is
# intended to run in multiple environments; otherwise, check them in:
Gemfile.lock
# .ruby-version
# .ruby-gemset

# unless supporting rvm < 1.11.0 or doing something fancy, ignore this:
.rvmrc

####################
# Jekyll.gitignore #
####################

_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata

################################################
# npm_modules.gitignore dependency directories #
################################################

# node_modules/
```
*  [.gitignore manual](https://git-scm.com/docs/gitignore)
*  [Example .gitignore files](https://github.com/github/gitignore)
*  [The Octocat has a Gist containing some good rules to add to this file.](https://gist.github.com/octocat/9257657)
*  [Explicit repository excludes](https://help.github.com/articles/ignoring-files/#explicit-repository-excludes)

### .exclude [≪](#read-me)

* * *

### Credits [≪](#read-me)

Third party resources applied in this repo. Each resource uses a GPL compatible license. The resources are listed according to each individual license, as noted, and have links where applicable.

-   PrismJS v1.15.0
    -   Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in thousands of websites, including some of those you visit daily.
    -   Copyright (c) 2012 Lea Verou
    - [https://prismjs.com/](https://prismjs.com/download.html#themes=prism-dark&languages=markup+css+clike+javascript+apacheconf+c+asciidoc+csharp+bash+cpp+coffeescript+clojure+ruby+css-extras+dart+django+docker+elixir+markup-templating+erlang+flow+git+go+less+haskell+java+json+julia+latex+markdown+liquid+lisp+makefile+erb+matlab+objectivec+pascal+perl+php+php-extras+sql+powershell+prolog+properties+scss+puppet+pure+python+r+jsx+typescript+rest+rust+sass+scala+scheme+plsql+swift+yaml+tsx+vim+wiki&plugins=line-highlight+line-numbers+custom-class+toolbar+jsonp-highlight+highlight-keywords+previewers+command-line+normalize-whitespace+keep-markup+copy-to-clipboard)
    -   [![Build Status](https://img.shields.io/travis/PrismJS/prism.svg?style=social)](https://travis-ci.org/PrismJS/prism) [![GitHub release](https://img.shields.io/github/release/PrismJS/prism.svg?style=social)](https://github.com/PrismJS/prism) [![npm version](https://img.shields.io/npm/v/prismjs.svg?style=social)](https://www.npmjs.com/package/prismjs) [![GitHub forks](https://img.shields.io/github/forks/PrismJS/prism.svg?style=social)](https://github.com/PrismJS/prism/network) [![GitHub stars](https://img.shields.io/github/stars/PrismJS/prism.svg?style=social)](https://github.com/PrismJS/prism/stargazers) [![GitHub license](https://img.shields.io/github/license/PrismJS/prism.svg?style=social)](https://github.com/PrismJS/prism/blob/master/LICENSE)
