
function RegVerifyLife(){}
//内置数据类型判断方法
RegVerifyLife.prototype.type = function(o){
    return Object.prototype.toString.call(o).slice(8,-1).toLowerCase()
}
export default  RegVerifyLife