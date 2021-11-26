Clone the repo, copy the script somewhere, modify the variables and set an alias in your shell.  
You could also use the github CLI but I can't be bothered to install it.

```bash
#!/bin/bash

BASE_DIR=~/dev
TEMPLATE_DIR=/ts-template

echo Directory?
read dir

echo Project Name?
read name

cp -R $BASE_DIR/$TEMPLATE_DIR $BASE_DIR/$dir/$name
cd $BASE_DIR/$dir/$name && code . && git init && yarn

echo successfully bootstrapped ts template in $BASE_DIR/$dir/$name

```

and then simply create a project by using your alias.

1. setup:ts (my alias)
2. asks for directory: playground
3. asks for folder name: example
4. installs dependencies and starts vscode for you :)
