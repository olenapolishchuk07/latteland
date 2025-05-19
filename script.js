$(document).ready(function () {
  // Бургер-меню
  $('.burger').click(function () {
    $('.nav-links').toggleClass('active');
    $('.overlay').toggleClass('active');
  });

  $('.overlay, .nav-links a').click(function () {
    $('.nav-links').removeClass('active');
    $('.overlay').removeClass('active');
  });

  // Кнопка "вгору"
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $('#scrollToTopBtn').click(function () {
  $(window).scrollTop(0); // миттєвий підйом
  return false;
});

  $('.gallery-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    pauseOnHover: false,
    adaptiveHeight: true
  });

  // Валідація форми
$('#contact-form').submit(function (e) {
  e.preventDefault();

  const nameInput = $('#name');
  const emailInput = $('#email');
  const messageInput = $('#message');

  const nameError = $('#name-error');
  const emailError = $('#email-error');
  const messageError = $('#message-error'); // додамо нижче в HTML

  let isValid = true;

  // Очищення старих помилок
  nameError.text('');
  emailError.text('');
  messageError.text('');
  nameInput.removeClass('invalid valid');
  emailInput.removeClass('invalid valid');
  messageInput.removeClass('invalid valid');

  const nameVal = nameInput.val().trim();
  const emailVal = emailInput.val().trim();
  const messageVal = messageInput.val().trim();

  // Перевірка імені
  if (nameVal.length === 0) {
  nameInput.addClass('invalid');
  nameError.text("Це поле обов'язкове");
  isValid = false;
} else if (nameVal.length > 20) {
  nameInput.addClass('invalid');
  nameError.text("Ім'я повинно містити не більше 20 символів.");
  isValid = false;
}
else if (nameVal.length < 2) {
  nameInput.addClass('invalid');
  nameError.text("Ім'я повинно містити не менше 2 символів.");
  isValid = false;
} else if (!/^[a-zA-Zа-яА-ЯіїєІЇЄґҐ]+$/.test(nameVal)) {
  nameInput.addClass('invalid');
  nameError.text("Ім'я не повинно містити цифри, пробіли чи спецсимволи.");
  isValid = false;
} else {
  nameInput.addClass('valid');
}
  // Перевірка email
  if (emailVal.length === 0) {
    emailInput.addClass('invalid');
    emailError.text("Це поле обов'язкове");
    isValid = false;
  } else if (!emailVal.includes('@')) {
    emailInput.addClass('invalid');
    emailError.text('Email повинен містити символ "@"');
    isValid = false;
  } else if (/\.ru$/i.test(emailVal)) {
    emailInput.addClass('invalid');
    emailError.text('Email не може містити домен ".ru".');
    isValid = false;
  } else {
    emailInput.addClass('valid');
  }

  // Перевірка повідомлення
  if (messageVal.length === 0) {
    messageInput.addClass('invalid');
    messageError.text("Це поле обов'язкове");
    isValid = false;
  } else {
    messageInput.addClass('valid');
  }

  // Якщо всі поля валідні — відкриваємо посилання
  if (isValid) {
    const subject = 'Звʼязок з LatteLand';
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=cukerochka07@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageVal)}`;
    window.open(mailtoLink, '_blank');

    $('#contact-form')[0].reset();
    nameInput.removeClass('valid invalid');
    emailInput.removeClass('valid invalid');
    messageInput.removeClass('valid invalid');
    $('#form-message').text('Ваше повідомлення надіслано!').fadeIn().delay(3000).fadeOut();
  }
});

 $('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: true, // дозволяє карткам мати ширину залежно від контенту
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});