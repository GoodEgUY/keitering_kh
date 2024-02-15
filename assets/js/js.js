const DATA = {
  econom: {
    title: "",
    закуски: [
      "Брускетты с вяленными томатами, сиром, виноградом",
      "Слоеный пирог с салями, сыром, помидорами",
      "Лаваш с курицей, крем сыром, огурцом",
      "Тарталетка крабовый + кукуруза",
      "Фруктовая нарезка (яблоки, хурма, груша, виноград)",
      "Пиццеты мини каждому по 2 вида",
      "Нарезки мясная (3 вида + багет)",
    ],
    витрати: "Закуп на 3,5-4, Работа, закупка -1,5, Такси",
  },
  premium: {
    закуски: [
      "Брускетты с вяленными томатами, крем сыр, виноград, руккола",
      "Лаваш ролл с курицей гриль, крем сыр, огурец",
      "Шпажки сыр бри-черри-оливки",
      "Баклажаны рулетики с сыром и помидором",
      "Канапе корзинки песочные с салатом крабовый + кукуруза",
      "Блинчики с лососем и крем сыром",
      "Тыква с бри и орехами запеченная с рукколой",
      "Пальчики свиные запеченные с морковью",
      "Шашлычки с курицей и ананасом",
    ],
    холодні_закуски: ["Фруктовая нарезка", "Сырная нарезка", "Мясная нарезка"],
    салати_в_стаканчиках: [
      "Салат курица/ананас/сыр",
      "Либо оливье либо мясо /сыр/грибы и лук /сухарики",
    ],
    напої: "Компот домашний клубничный",
    дитячий_стіл: ["Бургеры мини с курицей"],
  },
};
var inputs = document.querySelectorAll("input");

document.addEventListener("DOMContentLoaded", function () {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  smoothLinks.forEach(function (smoothLink) {
    smoothLink.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = smoothLink.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth", // Добавляем плавную прокрутку
        });
      }
    });
  });
});

inputs.forEach(function (input) {
  input.addEventListener("focus", function () {
    document.body.style.zoom = 1;
  });
});
//  ACCORDION
$(function () {
  $(".accordion__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp("fast");
      $(".accordion__title").removeClass("accordion-active");
      $(".accordion__arrow").removeClass("accordion__rotate");
    }

    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $(".accordion__arrow", this).toggleClass("accordion__rotate");
  });
});

$(".formModalButton").on("click", function (event) {
  event.stopPropagation(); // Остановить всплытие события, чтобы избежать закрытия модального окна сразу после открытия
  $(".modalWrapper").addClass("modalWrapper-active");
  $("#clientTarget").val("");
});

// При клике на любое место в документе
$(document).on("click", function (event) {
  // Проверяем, является ли цель клика не модальным окном или его потомком
  if ($(event.target).hasClass("modalWrapper")) {
    // Закрываем модальное окно
    $(".modalWrapper").removeClass("modalWrapper-active");
  }
});
$(function () {
  $("#datepicker").datepicker();
});

$("#ecoButton").on("click", (event) => {
  $("#clientTarget").val("Мастер Класс");
  console.log($("#clientTarget").val());
  event.stopPropagation();
  $(".modalWrapper").addClass("modalWrapper-active");
});
$("#standartButton").on("click", (event) => {
  $("#clientTarget").val("Банкет(Эконом)");
  console.log($("#clientTarget").val());
  event.stopPropagation();
  $(".modalWrapper").addClass("modalWrapper-active");
});
$("#premiumButton").on("click", (event) => {
  $("#clientTarget").val("Банкет(Стандарт)");
  console.log($("#clientTarget").val());
  event.stopPropagation();
  $(".modalWrapper").addClass("modalWrapper-active");
});
$("#luxButton").on("click", (event) => {
  $("#clientTarget").val("Банкет(Премиум)");
  console.log($("#clientTarget").val());
  event.stopPropagation();
  $(".modalWrapper").addClass("modalWrapper-active");
});
$("#masterClassButton").on("click", (event) => {
  $("#clientTarget").val("Банкет(Люкс)");
  console.log($("#clientTarget").val());
  event.stopPropagation();
  $(".modalWrapper").addClass("modalWrapper-active");
});
