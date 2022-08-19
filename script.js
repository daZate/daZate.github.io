document.getElementById('getvideos').onclick = (e) =>
{
  var link = document.getElementById('account_link')
  console.log(link.value)
  $.get(link.value, data => 
  {
    alert(data);
  }
  );
}
