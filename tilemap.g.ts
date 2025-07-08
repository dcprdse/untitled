// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tileGrass1":
            case "tile1":return tile1;
            case "tileGrass2":
            case "tile2":return tile2;
            case "tileGrass3":
            case "tile3":return tile3;
            case "tileDarkGrass1":
            case "tile4":return tile4;
            case "tileDarkGrass2":
            case "tile5":return tile5;
            case "tileDarkGrass3":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
