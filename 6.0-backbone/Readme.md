## Observation

* example from book `Mastering Typescript 3 (Nathan Rozentals)`

## Setup

* initialize typescript configuration 
* start node project and download backbone dependencies

```
tsc --init
npm init && npm install backbone bootstrap jbone jquery @types/backbone
```

## App Structure

* itemCollectionView
    * itemCollection
        * list of itemModel
            * each item in the list is a itemView
    * itemCollectionViewModel
        * has attribute selectedItem and Title

* view 
    * list of item
    * text that display the index of selected item and the item title.

```
[item1]
[item2]
[item3]
selected item: {index_item} - {title_item}
```

## Compilation

* all the ts files are compiled in one file called '6.0-backbone.js' 
* the output file is generated in folder '..\dist'
* tsconfig.json

```
...
"module": "system",
 "outFile": "../dist/6.0-backbone.js", 
...
 "rootDirs": ["."],
```

* to copile project
    * will take configuration of tsconfig.json
````
tsc
```

* after compile code open file index.html in source directory.
