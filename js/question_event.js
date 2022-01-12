// let focus_list = document.querySelectorAll('.focus_list a');


// for (let i = 0; i < focus_list.length; i++){
//     function loopIf(num) {
//         if (i == num) {
//             focus_list[i].style.color = '#3182f6';
//         } else {
//             focus_list[i].style.color = '#8b98a1';
//         }
//     }
//     focus_list[i].onclick = () => {
//         loopIf(0);
//         loopIf(1);
//         loopIf(2);
//         loopIf(3);
//         loopIf(4);
//         loopIf(5);
//         loopIf(6);
//         loopIf(7);
//         loopIf(8);
//         loopIf(9);
//         loopIf(10);
//         loopIf(11);
//     }
// }

let parameter = location.search;
if (parameter != "") {
    console.log(parameter);
}

//파라미터 공부