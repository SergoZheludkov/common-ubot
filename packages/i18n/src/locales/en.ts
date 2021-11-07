const en = {
  common: {
    loading: 'Loading',
    balance: 'Balance:',
    greeting: 'Start message',
    notification: 'Server notification',
    main_menu: 'Main menu message',
    settings_menu: 'Settings menu message',
    update_message: "I'm update!" + '\n\nЧто нового?' + '\n-Пункт 1"' + '\n-Пункт 2' + '\n-Пункт 3',
  },
  lang: {
    ru: '🇷🇺 Русский',
    en: '🇺🇸 English',
    message: 'Выбери язык / Choose your language',
    success: '👌👍🤙',
  },
  buttons: {
    balance: '💵 Balance',
    referral: '💎 Affiliate',
    feedback: '📲 Support',
    settings: '⚙️ Settings',
    languages: '🌎 Languages',
    notifications: '🔈 Notifications',
    rules: '📚 Rules',
    invite: '🤝 Invite',
    input_money: '💸 Payment',
    output_money: '💰 Output profit',
    all_payments: '🧾 All Payments',
    qiwi: '🟠 QIWI',
    yoomoney: '🟣 ЮMoney',
    webmoney: '🔵 Webmoney',
    check_payment: '♻️ Check payment',
    wallets: '💳 Wallets',
    statistics: '📈 Statistics',
    back: '🔙 Back',
    exit: '🔚 Exit',
    confirm: '✔️ Confirm',
    great: '✅ Great!',
    add_wallets: '➕ Add',
    management_wallets: '💱 Management',

    // ------Reminder Settings------
    remindersOff: '🔇 Disable reminders',
    remindersOn: '🔊 Enable reminders',

    // Фильтрация кошельков
    enabled: '🟢',
    disabled: '🔴',
    all: 'All',

    // Кпопки статистики
    users: '👥 Users',
    payments: '🧾 Payments',

    // Кнопки периодов
    all_time: 'All time',
    month: 'Month',
    week: 'Week',
    yesterday: 'Yesterday',
    period: 'Period',
  },
  admin_menu: {
    message: 'What do you want to do?',
    error: 'This menu is for administration only. Sorry, but you are not an admin!',
  },
  registration: {
    // message: 'Choose language / Выберите язык',
    success: 'Registration successful',
  },
  referral: {
    title: '🙋‍♂️ Affiliate program',
    message: '🎁 Invite friends and get 10% of each balance top-up by a friend',
    balance: '💰 Your partner balance: ',
    notification: {
      registration_success: 'You have registered with your link by ',
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

    bill: 'Bill',
    transfer: 'Сделай перевод на сумму:',
    wallet_number: 'Wallet: ',
    warning: 'Внимание! В комментарий к платежу обязательно напиши:',
    else: 'Иначе я не смогу проверить твой платеж',
    or: 'or ',

    update_message: 'После оплаты проверь платеж и деньги зачислятся, если ты сделал все верно',
    check_failed: 'Перевод не найден.',
    write_to_support: 'Если считаешь что произошла ошибка - напиши в поддержку.',
    next_check: 'Следующая попытка проверки будет доступна через',
    sec: 'sec',
    check_success: 'Платеж принят!',
    balance: 'Начисленно ',

    amount_error: 'Некорректно. Введи числом',
    amount_not_integer: 'Введи целое число',
    amount_should_be_positive: 'Число должно быть больше 0',
  },
  payments: {
    title: 'Payments',
    from: 'from',
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
      message: 'Input data',
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
    new_users: 'New users:',
    payments: 'Payments:',
    payments_is_empty: 'Payments is empty',
    total: 'Total:',
    amount: 'Amount:',
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

export { en };
