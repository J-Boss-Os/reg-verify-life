import RegVerifyLife from './rules.js'

RegVerifyLife.prototype._init = function(){
    for (let k in this.rules){
        if(k === 'VehicleNumber'){
            RegVerifyLife.prototype['isVehicleNumber'] = function(str,fn){
                if(str.length==7 || str.length==8){
                    let res = this.rules.VehicleNumber[str.length].test(str)
                    fn && fn(res)
                    return res
                }else{
                    throw Error("车牌号输入有误")
                }
                
            }
        }else{
            RegVerifyLife.prototype['is'+k]=function(s,fn){
                let res = this.rules[k].test(s)
                fn && fn(res)
                return  res
            }
        }
        
    } 
}
export default RegVerifyLife