/**
 * mqOled blocks
 */
//% groups=['oled-面板库']
namespace mqlib{

    let screen1024 = pins.createBuffer(1024);

    //% subcategory="oled"
    //% group='oled-面板库'
    //% block
    function drawPanel(x = 1, y = 1):void {
        screen1024.fill(0);
        for(var i=0;i<127;i++){
            OLED12864_I2C.pixelM(i, 0);
            OLED12864_I2C.pixelM(i, 63);
        }
        for(var i=0;i<64;i++){
            OLED12864_I2C.pixelM(0, i);
            OLED12864_I2C.pixelM(127, i);
        }
        OLED12864_I2C.showString(1, 1, 'X='+x);
        OLED12864_I2C.showString(1, 2, 'Y='+y);
        OLED12864_I2C.draw();
    }

}