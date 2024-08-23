let sideWidth = $('.sidebar').outerWidth();
    console.log(sideWidth); 
    let sidenav_visible = $('.sidenav-visible').outerWidth();
    console.log(sidenav_visible); 
    $('#searchedMeals').css({marginLeft :`${sidenav_visible}px`});
    $('.search-box').css({marginLeft :`${sidenav_visible}px`});
    $('#categories').css({marginLeft :`${sidenav_visible}px`});
    $('#listCategory').css({marginLeft :`${sidenav_visible}px`});
    $('#area').css({marginLeft :`${sidenav_visible}px`});
    $('#listMealArea').css({marginLeft :`${sidenav_visible}px`});
    $('#ingredients').css({marginLeft :`${sidenav_visible}px`});
    $('#listMealIngredients').css({marginLeft :`${sidenav_visible}px`});
    $('#contact').css({marginLeft :`${sidenav_visible}px`});
    $('#onLoad').css({marginLeft :`${sidenav_visible}px`});
/****************************************************************************** */
$(document).ready(function(){
  $('#loading').fadeOut(3000,function(){
      $('body').css({overflow:'visible'},1000)

  })
})
/*****************************import*********************************** ******/
import {Ui} from './ui.js';
let displayData = new Ui();
import { Validaition } from './validation.js';
let validateInput = new Validaition();
/********************show & hide navbar********************************/
$('.fa-bars').click(function(){  
   let sideLeft = $('.sidebar').offset().left;
   console.log(sideLeft);
     if(sideLeft===0){
      $(this).toggleClass('fa-xmark fa-bars')
      $('.navbar-box').css({left:`-${sideWidth}px`,transition:'left 1s'});
     }
     else{
      setTimeout(function(){
        $('.links li').addClass('fadeInUp-animation');
    },10);
      $('.navbar-box').css({left:`0px`,transition:'left 1s'});
      $(this).toggleClass('fa-xmark fa-bars')

     }
     $('.links li').removeClass('fadeInUp-animation');


  })

// /********************loading********************************/
$(document).ready(function(){
    $('#loading').fadeOut(2000,function(){
        $('body').css({'overflow-y':'visible'},1000)
    })
})
   /*****************************************show clicked section****************************************************/
  $('.navbar-box .links li a').click(async function(){
  $('.navbar-box').css({left:`-${sideWidth}px`,transition:'left 1s'});
  $('.navbar-box .fa-xmark').toggleClass('fa-xmark fa-bars') 
  let sectionId = $(this).attr('href');
  $('section').fadeOut(0);
  $(`section${sectionId}`).fadeIn(0, () => {
      $('html, body').animate({ scrollTop: 0 }, 10);
	  })
    console.log(sectionId);
if(sectionId=='#categories'){
  await displayData.displayAllCategory()
}
if(sectionId=='#area'){
  await displayData.displayArea()
}
if(sectionId=='#ingredients'){
  await displayData.displayingredients()
}
if(sectionId=='#contact'){
 validateInput.validateName();
}
  });
/*************************************search**********************************************************/
$('.dropdown-menu .dropdown-item').click(function () { 
$('#options').html($(this).html());
});

/**********************************display by name******************************************** */
  $('.search-by-name').click(function () { 
  $('input').removeClass('search-input-letter');
  $('input').addClass('search-input-name');
  $('input').removeAttr('maxlength');
 console.log($('input'));
  $('.search-input-name').keyup(async function() {
  await displayData.displayByName($(this).val());
  });
  });
  /**********************************display by fletter******************************************** */
  $('.search-by-fletter').click(function () { 
    $('input').removeClass('search-input-name');
    $('input').addClass('search-input-letter');
    $('input').attr('maxlength','1');
    console.log($('input'));
  $('.search-input-letter').keyup(async function() {
  //   if ($(this).val().length > 1) {
  //     $(this).val($(this).val().substring(0, 1));
  // }
  await displayData.displayByFletter($(this).val() || 'a');
  
  });
  });
  /***************************************************display details********************************************** */
  async function displayDetails(targetId)
  {
    document.getElementById('details').classList.replace('d-none', 'd-block');
    $("body").css("overflow-y", "hidden");
    $("#details").css("overflow-y", "auto");
    await displayData.displayMealDetails(targetId);
  }
  /***********************************************show details********************************************************** */
  $('#dataSearch').click(async function(e){
    let targetId = e.target.id;
    console.log(targetId);
    if(targetId!=='dataSearch'){
      displayDetails(targetId);
    }
  }
  )
  $('#closeBtn').click(function(){
    document.getElementById('details').classList.replace('d-block', 'd-none');
    $("body").css("overflow-y", "visible");
  })
  /**************************************show-list categories************************************************* */
  $('#dataCategory').click(async function(e){
   let targetCategory=e.target.id;
    if(e.target.id !=='dataCategory'){
    $('#listCategory').show();
    $('#categories').hide();
    $('#listCategory').removeClass('d-none');
    $('.category-name').html(targetCategory)
   await displayData.displayMealsByCategories(targetCategory);
    }
  }) 
  /******************************details of meal category************************************************************** */
  $('#listCategory').click(function(e){
    let targetId = e.target.id;
    if(targetId!=='listCategory'){
      displayDetails(targetId);
    }
  }
)
/*******************************show meal area******************************************** */
$('#area-data').click(async function(e){
  let targetarea = e.target.id;
  console.log(targetarea);
  if(e.target.id!=='area-data'){
    $('#listMealArea').show();
    $('#listMealArea').removeClass('d-none');
    $('#area').hide();
    $('.area-name').html(targetarea);
    await displayData.displayMealsByAreas(targetarea);
  }
}
)
/**********************************details of meal area********************************************************* */
$('#listMealArea').click(function(e){
  let targetId = e.target.id;
  if(targetId!=='listMealArea'){
    displayDetails(targetId);
  }
}
) 
/*************************************meal ingredients******************************************************** */
$('#ingredients-data').click(async function(e){
  let targetIng = e.target.id;
  console.log(targetIng);
  if(e.target.id!=='ingredients-data'){
    $('#listMealIngredients').show();
    $('#listMealIngredients').removeClass('d-none');
    $('#ingredients').hide();
    $('.ingredient-name').html(targetIng);
    await displayData.displayMealsIngredients(targetIng);
  }
}
)
/****************************details from ingredients**************** */
$('#listMealIngredients').click(function(e){
  let targetId = e.target.id;
  if(targetId!=='listMealIngredients'){
    displayDetails(targetId);
  }
}
) 
/*******************************contact validation*************************** */
let inpuList =document.querySelectorAll('#contact input');
$(inpuList).click(function(e){
  let inputTarget = e.target.id;
  console.log(inputTarget);

  $(`#${inputTarget}`).change(function(){
  validateInput.validationInput($(this).attr('id'),$(this).val())
  if(validateInput.validationInput($('#nameInput').attr('id'),$('#nameInput').val())&&
  validateInput.validationInput($('#emailInput').attr('id'),$('#emailInput').val())&&
  validateInput.validationInput($('#phoneInput').attr('id'),$('#phoneInput').val())&&
  validateInput.validationInput($('#ageInput').attr('id'),$('#ageInput').val())&&
  validateInput.validationInput($('#passwordInput').attr('id'),$('#passwordInput').val())&&
  validateInput.validationInput($('#repasswordInput').attr('id'),$('#repasswordInput').val())&&
  ($('#repasswordInput').val()===$('#passwordInput').val())
){
    $('#submitBtn').prop('disabled', false);
    console.log($('#submitBtn'))
    $('#submitBtn').click(function(e){
      e.preventDefault();
      clear();
      Swal.fire({
        text: "Message has been successfully submitted",
        icon: "success"
      });
    })
  }

  else{
    $('#submitBtn').prop('disabled', true);
  }
  if($('#repasswordInput').val()!==$('#passwordInput').val()){
    $('#repasswordAlert').show();
  }
})
 
})

function clear(){
  $('#contact input').each(function () {
    $(this).val('')
    $(this).removeClass('is-valid');
});

};
/************************************onload*************************************************** */
$(window).ready(async function(){
  $('section').fadeOut(0);
  $('#onLoad').fadeIn(0, () => {
      $('html, body').animate({ scrollTop: 0 }, 10);
	  })
await displayData.displayMealsOnLoad();
})

$('#onloadMeals').click(function(e){
  let targetId = e.target.id;
  if(targetId!=='onloadMeals'){
    displayDetails(targetId);
  }
}
) 



  









