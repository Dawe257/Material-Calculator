function insert(num) {
    document.form.textview.value =
        document.form.textview.value + num;
}
function clean() {
    document.form.textview.value = "";
}
function back() {
    let sum = document.form.textview.value;
    document.form.textview.value = sum.substring(0, sum.length - 1);
}
function equal() {
    let sum = document.form.textview.value;
    if (sum) {
        document.form.textview.value = eval(sum);
    }
}