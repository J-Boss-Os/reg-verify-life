/**
 * extend：对外扩展API，接收两个参数
 * @name{}：扩展的验证名称
 * rule：验证规则
 */

/**
 * 对外扩展API
 * @method extend
 * @name { String } 扩展的验证名称
 * @rule { RegExp | Function } 验证规则
 * @return { Boolean } false 或 true
 */
import RegVerifyLife from './verify.js'

RegVerifyLife.prototype.extend = function(name,rule){

    if(this.type(rule) === "function"){
        
        this[name] = function(s,fn){
            let res = rule(s,fn)
            fn && fn(res)
            return res
        }

    }else if(this.type(rule) === "regexp"){
        this[name] = function(s,fn){
            let res = rule.test(s)
            fn && fn(res)
            return res
        }
    } else{
        console.warn('The data you pass in should be a function or a regular')
    }
}

export default RegVerifyLife