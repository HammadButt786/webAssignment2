$(function()
{
    $("#addbtn").click(addButton)
   
        $("#resetbtn").click(Reset);
   
        $(document).on("click",'.toRemove',Remove);

        $(document).on("click", ".toUpdate", function(){
            var name = $(this).parents("tr").attr('data-name');
            var age = $(this).parents("tr").attr('data-age');
             var city = $(this).parents("tr").attr('data-city');
            var gender = $(this).parents("tr").attr('data-gender');
        
            $(this).parents("tr").find("td:eq(0)").html('<input name="edit_name" value="'+name+'">');
            $(this).parents("tr").find("td:eq(1)").html('<input name="edit_age" value="'+age+'">');
            $(this).parents("tr").find("td:eq(2)").html('<input name="edit_city" value="'+city+'">');
            $(this).parents("tr").find("td:eq(3)").html('<input name="edit_gender" value="'+gender+'">');
        });

        $(document).on("click", "#updatebtn", function(){
            var name = $(this).parents("tr").find("input[name='edit_name']").val();
            var age = $(this).parents("tr").find("input[name='edit_age']").val();
            var city = $(this).parents("tr").find("input[name='edit_city']").val();
            var gender = $(this).parents("tr").find("input[name='edit_gender']").val();
         
            
            $(this).parents("tr").find("td:eq(0)").text(name);
            $(this).parents("tr").find("td:eq(1)").text(age);
            $(this).parents("tr").find("td:eq(2)").text(city);
            $(this).parents("tr").find("td:eq(3)").text(gender);
         
            $(this).parents("tr").attr('data-name', name);
            $(this).parents("tr").attr('data-age', age);
            $(this).parents("tr").attr('data-city', city);
            $(this).parents("tr").attr('data-gender', gender);
        
        
            $(this).parents("tr").find(".toUpdate").show();
            $(this).parents("tr").find("#updatebtn").remove();
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
    $("#tbody").append("<tr id= 'rowData'><td > "+ name +" </td><td> "+age+" </td><td> "+city+" </td> <td> "+gender+" </td><td><a href= '#' class='toUpdate'>Update</a>&nbsp; / &nbsp; <a href='#' class='toRemove'>Remove</a></td></tr>");

$('#name').val('');
    $('#age').val('');
    $('#city').val('');
    $('.radio').prop('checked',false);
    handleButtons();

}

function handleButtons(){
    $('#_update').prop('disabled',true);
    $('#_reset').prop('disabled',false);
}

