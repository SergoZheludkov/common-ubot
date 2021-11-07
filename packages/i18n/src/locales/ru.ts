const ru = {
  common: {
    loading: 'Загрузка',
    balance: 'Баланс:',
    greeting: 'Стартовое сообщение',
    notification: 'Уведомление от сервера',
    main_menu: 'Сообщение главного меню',
    settings_menu: 'Сообщение меню настроек',
    update_message: 'Я обновился!' + '\n\nЧто нового?' + '\n-Пункт 1"' + '\n-Пункт 2' + '\n-Пункт 3',
  },
  lang: {
    ru: '🇷🇺 Русский',
    en: '🇺🇸 English',
    message: 'Выбери язык / Choose your language',
    success: '👌👍🤙',
    main: 'Выбран:',
  },
  buttons: {
    balance: '💵 Баланс',
    referral: '💎 Партнерка',
    feedback: '📲 Обратная связь',
    settings: '⚙️ Настройки',
    languages: '🌎 Язык',
    notifications: '🔈 Уведомления',
    rules: '📚 Правила',
    invite: '🤝 Пригласить друга',
    input_money: '💸 Пополнить',
    output_money: '💰 Вывести профит',
    all_payments: '🧾 Все пополнения',
    qiwi: '🟠 QIWI',
    yoomoney: '🟣 ЮMoney',
    webmoney: '🔵 Webmoney',
    check_payment: '♻️ Проверить платеж',
    wallets: '💳 Кошельки',
    statistic: '📈 Статистика',
    back: '🔙 Назад',
    exit: '🔚 Выход',
    confirm: '✔️ Применить',
    great: '✅ Отлично!',
    add_wallets: '➕ Добавить',
    management_wallets: '💱 Управление',

    // ------Reminder Settings------
    remindersOff: '🔇 Выключить напоминания',
    remindersOn: '🔊 Включить напоминания',

    // Фильтрация кошельков
    enabled: '🟢',
    disabled: '🔴',
    all: 'Все',

    // Кпопки статистики
    users: '👥 Пользователи',
    payments: '🧾 Платежи',

    // Кнопки периодов
    all_time: 'Всего',
    month: 'Месяц',
    week: 'Неделя',
    yesterday: 'Вчера',
    period: 'Период',
  },
  admin_menu: {
    message: 'Что хочешь сделать?',
    error: 'Это меню только для администрации. Извините, но ты не админ!',
  },
  registration: {
    message: 'Choose language / Выберите язык',
    success: 'Регистрация успешна',
  },
  referral: {
    title: '🙋‍♂️ Партнерская программа',
    message: '🎁 Приглашай друзей и получай 10% от каждого пополнения баланса другом.',
    balance: '💰 Твой партнерский баланс: ',
    notification: {
      registration_success: 'По твоей ссылке зарегистрировался ',
      bonus: 'Теперь ты будешь получать 10% с каждого его пополнения баланса',

      money_part1: 'Тебе начисленно ',
      money_part2: ' за пополнение рефералом ',
    },
  },
  invite: {
    title: 'Просто перешли другу следующее сообщение⤵️',
    message: 'Йо, здарова!\nСообщение с реферральной ссылочкой:',
    // bonus: 'При переходе по ссылке получишь +10% на первое пополнение баланса.',
  },
  input_money: {
    amount: 'Укажи сумму пополнения в USD ($)',
    wallet: 'Выбери удобный способ оплаты',

    bill: 'Счет на оплату',
    transfer: 'Сделай перевод на сумму:',
    wallet_number: 'На кошелек: ',
    warning: 'Внимание! В комментарий к платежу обязательно напиши:',
    else: 'Иначе я не смогу проверить твой платеж',
    or: 'или ',

    update_message: 'После оплаты проверь платеж и деньги зачислятся, если ты сделал все верно',
    check_failed: 'Перевод не найден.',
    write_to_support: 'Если считаешь что произошла ошибка - напиши в поддержку.',
    next_check: 'Следующая попытка проверки будет доступна через',
    sec: 'секунд',
    check_success: 'Платеж принят!',
    balance: 'Начисленно ',

    amount_error: 'Некорректно. Введи числом',
    amount_not_integer: 'Введи целое число',
    amount_should_be_positive: 'Число должно быть больше 0',
  },
  payments: {
    title: 'Платежи',
    from: 'из',
    error: 'Произошла ошибка с загрузкой платежей. Попробуй позже...',
    empty: 'Ты еще не делал никаких платежей',
  },
  feedback: {
    message:
      'В данный момент любое отправленное сообщение будет пересланно в поддержку. Вы можете описать проблему текстом, отправить фото или видео (запись экрана)',
  },
  wallets: {
    message: 'Действия с кошельками',

    type_message: 'Укажи тип добавляемого кошелька',
    type_validation_error: 'Выбери тип кошелька кнопками, из представленных выше',

    empty_wallets_list: 'Нет добавленных кошельков',

    meta: {
      message: 'Введи данные',
      format: 'number:token;',
      description: 'Данные одного кошелька должны быть с разделителем :\nРазные кошельки должны быть с разделителем ;',

      validation_error: 'Не косячь, сука!',
    },

    add: {
      success: 'Успешно добавленны и запущенны в ротацию кошельки в количестве',
      failed:
        'Произошла проблема с добавлением кошельков на сервере. Вероятно номер или токен уже использовался. Все проверь, если уверен что все четко и если ты не разработчик - срочно отпиши ему о проблеме',
    },

    management: {
      message: 'Переключение кошельков',
    },
  },
  rules: {
    message: 'Правила' + '\n\n-Пункт 1"' + '\n-Пункт 2' + '\n-Пункт 3',
  },
  statistics: {
    more_details: 'Подробнее можно узнать по кнопкам ниже',
    new_users: 'Новых юзеров:',
    payments: 'Платежи:',
    payments_is_empty: 'Платежей не было',
    total: 'Всего:',
    amount: 'Сумма:',
    choose_period: 'Введите период в формате:',
    period_example: '\n220521-240521',

    periods: {
      daily: 'Статистика за день',
      yesterday: 'Статистика за вчера',
      weekly: 'Статистика за неделю',
      monthly: 'Статистика за месяц',
      all_time: 'Статистика за все время',
      by_period: 'Статистика за период:',
    },
  },
};

export { ru };
