/**
 * Basic Programmable Calculator
 */
function init()
{
   var op1, op2;
   var opr;
   var flag_new_number;
   var txtDisplay = document.getElementById('txtDisplay');
   var btnClr = document.getElementById('btnClr');
   var btnBksp = document.getElementById('btnBksp');
   var btn0 = document.getElementById('btn0');
   var btn1 = document.getElementById('btn1');
   var btn2 = document.getElementById('btn2');
   var btn3 = document.getElementById('btn3');
   var btn4 = document.getElementById('btn4');
   var btn5 = document.getElementById('btn5');
   var btn6 = document.getElementById('btn6');
   var btn7 = document.getElementById('btn7');
   var btn8 = document.getElementById('btn8');
   var btn9 = document.getElementById('btn9');
   var btnDot = document.getElementById('btnDot');
   var btnAdd = document.getElementById('btnAdd');
   var btnSub = document.getElementById('btnSub');
   var btnMul = document.getElementById('btnMul');
   var btnDiv = document.getElementById('btnDiv');
   var btnEqu = document.getElementById('btnEqu');
   btnClr.onclick = function() {
      txtDisplay.value = '0';
      op1 = null;
      opr = null;
      flag_new_number = true;
   };
   btnBksp.onclick = function() {
      var res = String(txtDisplay.value);
      if(res.length <= 1)
         txtDisplay.value = '0';
      else
         txtDisplay.value = res.substr(0, res.length - 1);
   };
   function enterNumber(c) {
      if(flag_new_number)
      {
         flag_new_number = false;
         txtDisplay.value = c.value;
         return;
      }
      if(txtDisplay.value == '0')
         txtDisplay.value = c.value;
      else
         txtDisplay.value = txtDisplay.value.concat(c.value);
   }
   function enterDot() {
      if(flag_new_number)
      {
         flag_new_number = false;
         txtDisplay.value = '.';
         return;
      }
      var res_str = txtDisplay.value;
      if(res_str.indexOf('.') == -1)
      {
         txtDisplay.value = res_str.concat('.');
      }
   }
   function enterMinus() {
      if(flag_new_number)
         flag_new_number = false;
      txtDisplay.value = '-';
   }
   function performCalc(c)
   {
      if(flag_new_number)
      {
         if(c == btnEqu)
            opr = null;
         else
            opr = c.value;
         return;
      }
      op2 = parseFloat(txtDisplay.value);
      if(op1 == null || opr == null)
      {
         if(c == btnEqu)
            opr = null;
         else
            opr = c.value;
         op1 = parseFloat(txtDisplay.value);
      }
      else
      {
         if(opr == '+')
            op1 = op1 + op2;
         else if(opr == '-')
            op1 = op1 - op2;
         else if(opr == '*')
            op1 = op1 * op2;
         else if(opr == '/')
            op1 = op1 / op2;
         txtDisplay.value = op1;
         if(c == btnEqu)
            opr = null;
         else
            opr = c.value;
      }
      flag_new_number = true;
   }
   btn0.onclick = function() { enterNumber(btn0) };
   btn1.onclick = function() { enterNumber(btn1) };
   btn2.onclick = function() { enterNumber(btn2) };
   btn3.onclick = function() { enterNumber(btn3) };
   btn4.onclick = function() { enterNumber(btn4) };
   btn5.onclick = function() { enterNumber(btn5) };
   btn6.onclick = function() { enterNumber(btn6) };
   btn7.onclick = function() { enterNumber(btn7) };
   btn8.onclick = function() { enterNumber(btn8) };
   btn9.onclick = function() { enterNumber(btn9) };
   btnDot.onclick = function() { enterDot() };
   btnSub.onclick = function() {
      if(txtDisplay.value == '0' || flag_new_number)
         enterMinus();
      else
         performCalc(btnSub);
   };
   btnAdd.onclick = function() { performCalc(btnAdd) };
   btnMul.onclick = function() { performCalc(btnMul) };
   btnDiv.onclick = function() { performCalc(btnDiv) };
   btnEqu.onclick = function() { performCalc(btnEqu) };
}
window.onload = init;
