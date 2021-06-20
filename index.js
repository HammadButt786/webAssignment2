$(function()
{
    $("#addbtn").click(addButton)
   
        $("#resetbtn").click(Reset);
   
        $(document).on("click",'.toRemove',Remove);
      

        $('.toUpdate').click(function(){
            $('#updatebtn').prop('disabled',false);
            $('#addbtn').prop('disabled',true);
            $('#resetbtn').prop('disabled',false);
            var tr =  $(this).parent().parent().children();
            for(i=0;i<tr.length-1;i++)
            {
                 console.log(tr[i].innerText);
            }
            name = $('#name').val(tr[0].innerText);
            age = $('#age').val(tr[1].innerText);
            city = $('#city').val(tr[2].innerText);
            $("input[name=radio][value=" + tr[3].innerText + "]").prop('checked', true);
            
            $('#updatebtn').click(function(){
                name = $('#name').val();
                
                age = $('#age').val();
                city = $('#city').val();
                gender = $('.radio:checked').val();
                tr[0].innerText = name;
            tr[1].innerText = age;
            tr[2].innerText = city;
            tr[3].innerText = gender;
            name = $('#name').val('');
            age = $('#age').val('');
            city = $('#city').val('');
            $('#updatebtn').prop('disabled',true);
            $('#addbtn').prop('disabled',false);
            $('.radio').prop('checked',false);
                

        
  
});
        
        });


    });




function Remove(){


    $(this).closest('tr').remove();
}




function Reset(){
    $("#tbody").empty();
name = $("#name").val('');
age = $("#age").val('');
city = $("#city").val('');


}

function addButton(){
    var name =  $("#name").val();
    var age =  $("#age").val();
    var city =  $("#city").val();
    var gender = $(".gender:checked").val();

    if(name == '' || age=='' || city == '' || name == null || age== null || city == null || gender == null)
    {
        alert('insert all values');
    }
    if(name.length > 10)
    {

        alert('Name must be less than 10 letters');
        return;
    }

    if(age<10 || age>50)
    {
        alert("age must be greater than 10 and less than 50");
        return;
    }
    if(gender== '' || gender== null)
    {
        insert('Please select gender');
        return;

    }


    
    if(name== '' || name== null)
    {
        insert('Please enter name');
        return;
    }

    
    if(city== '' || city== null)
    {
        insert('Please enter city');
        return;
    }

    
    if(age== '' || age== null)
    {
        insert('Please enter  age');
        return;
    }
    $("#tbody").append("<tr id= 'rowData'   ><td > "+ name +" </td><td> "+age+" </td><td> "+city+" </td> <td> "+gender+" </td><td><a href= '#'  class='toUpdate' data-id= '+id+'>Update</a>&nbsp; / &nbsp; <a href='#' class='toRemove'>Remove</a></td></tr>");

 $('#name').val('');
    $('#age').val('');
    $('#city').val('');
    $('.radio').prop('checked',false);


}
