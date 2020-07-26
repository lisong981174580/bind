// 模拟 bind
Function.prototype.bind1 = function() {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments);

  // 获取 this 参数数组第一项
  const t = args.shift();

  // fn.bind(...) 中的 fn
  const self = this;

  // 返回一个函数
  return function() {
    return self.apply(t, args);
  }
}