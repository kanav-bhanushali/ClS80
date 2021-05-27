student_array=[];
function submit(){
    var display_student_array=[];
    for(var i=1;i<=4;i++){
        var student_name=document.getElementById("name_of_the_student_"+i).value;
        student_array.push(student_name);
    }
    var l=student_array.length;
    for(var j=0;j<l;j++){
        display_student_array.push("<h4>name-"+student_array[j]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var r=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=r;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    var display_student_array=[];
    var l=student_array.length;
    for(var j=0;j<l;j++){
        display_student_array.push("<h4>name-"+student_array[j]+"</h4>");
    }
    var r=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=r;
}