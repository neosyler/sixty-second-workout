const cheerTranslator = require('./translators/cheer.translator');
const workoutTranslator = require('./translators/workout.translator');

module.exports = {
    en: {
        translation: {
            // general messages
            WELCOME_MSG: 'Welcome to Sixty Second Workout! I\'ll pick a random workout for you to do for sixty seconds. Are you ready to get started?',
            READY_MSG: '{{cheer}} Are you ready for the next workout?',
            WORKOUT_MSG: 'OK, let\'s {{workout}} sixty seconds, starting in 5, 4, 3, 2, 1... ',
            COMPLETED_MSG: '<audio src="soundbank://soundlibrary/explosions/fireworks/fireworks_02"/> Wow! You completed all of the exercises I have available. Would you like to keep going?',
            STATUS_MSG: 'So far, you have completed a total of {{total}} exercises and skipped {{skipped}} exercises. Would you like to keep going?',
            HELP_MSG: 'You can say start to start a random sixty second workout. Say skip and I\'ll stop the current workout and choose another random one for you to do. Or say status if you want to hear your progress. If you want to stop, just tell me to stop. Good luck!',
            GOODBYE_MSG: 'You completed a total of {{total}} exercises and skipped {{skipped}} exercises! Thanks for using Sixty Second Workout! Good bye!',
            GOODBYE_CARD_TITLE: 'Sixty Second Workout',
            FALLBACK_MSG: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MSG: 'Sorry, I had trouble doing what you asked. Please try again.',

            // workouts
            ...workoutTranslator.getTranslations('en'),

            // cheers
            ...cheerTranslator.getTranslations('en')
        }
    },
    es: { // spanish
        translation: {
            WELCOME_MSG: '¡Bienvenido a Sixty Second Workout! Elegiré un entrenamiento al azar para que lo hagas durante sesenta segundos. ¿Estas listo para empezar?',
            GET_STARTED_MSG: "OK, ¡comencemos un entrenamiento de {{howLong}} minutos! ¿Estás listo?",
            READY_MSG: '{{cheer}} ¿Estás lista para el próximo entrenamiento?',
            WORKOUT_MSG: 'OK, {{workout}} sesenta segundos, comenzando ahora ...',
            HELP_MSG: 'Puede decir comenzar para comenzar un entrenamiento aleatorio de sesenta segundos. Di omitir y detendré un entrenamiento y elegiré otro aleatorio para que hagas. Si quieres parar, solo dime que pare. Asegúrese de tomar un breve descanso entre los entrenamientos y no se esfuerce demasiado. ¡Buena suerte!',
            GOODBYE_MSG: '¡Adiós! ¡Gracias por usar Sixty Second Workout!',
            FALLBACK_MSG: 'Lo siento, no sé sobre eso. Inténtalo de nuevo.',
            ERROR_MSG: 'Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo.',
            BICYCLE_CRUNCHES: 'mira cuántos abdominales puedes hacer en bicicleta',
            CROSS_MOUNTAIN_CLIMBERS: 'Mira cuántas escaladoras de montaña puedes hacer en',
            PLANKS_HIP_DIPS: 'vea cuántas tablas con salientes de cadera puede hacer en',
            PLANK: 'sostenga una tabla para',
            TOE_REACHES: 'ver cuántos alcances de los dedos puede hacer en',
            SIDE_CRUNCHES: 'vea cuántos abdominales de lado a lado puede hacer en',
            RUSSIAN_TWISTS: 'mira cuántos giros rusos puedes hacer en',
            SKATER_SQUATS: 'ver cuántas sentadillas de skater puedes hacer en',
            SQUAT_JUMPS: 'ver cuántos saltos en cuclillas puedes hacer en',
            ALTERNATING_LUNGES: 'ver cuántas estocadas alternas puedes hacer en',
            BURPEES: 'mira cuántos burpees puedes hacer en',
            SIDE_PLANK: 'hacer una tabla lateral para',
            SITUPS: 'ver cuántas sentadillas puedes hacer en',
            PUSHUPS: 'ver cuántas flexiones puedes hacer en',
            JUMPING_JACKS: 'ver cuántos saltos puedes hacer en',
            GREAT_JOB: '¡Gran trabajo!',
            GOOD_GOING: '¡Buen curso! ¡Sabía que podrías hacerlo!',
            NOT_BAD: '¡No está mal!',
            MORE_PRACTICE: '¡Creo que necesitas más práctica!',
            IMPRESSED: 'Wow, estoy realmente impresionado!',
            DO_BETTER: 'Puedes hacerlo mejor que eso.',
            PRETTY_WELL: 'Pensé que lo hiciste bastante bien en eso.',
            TAKE_BREAK: 'No te olvides de tomar un descanso. Bebe un poco de agua. No te preocupes, estaré aquí.',
            REMEMBER: 'Recuerde, puede hacer cualquier cosa durante sesenta segundos.',
            GOOD_JOB: 'Buen trabajo, para el próximo, ¡dame un poco más de gusto!',
            WELL_DONE: 'Bien hecho.',
            SOUNDED_HARD: 'Ese sonaba como si fuera difícil. ¡Seguid así!'
        }
    },
    de: { // german
        translation: {
            WELCOME_MSG: 'Willkommen zum zweiundsechzigsten Training! Ich werde ein zufälliges Training für Sie auswählen, das Sie sechzig Sekunden lang durchführen können. Bist du bereit loszulegen?',
            GET_STARTED_MSG: "OK, beginnen wir ein {{howLong}} Minuten-Training! Sind Sie bereit?",
            READY_MSG: '{{cheer}} Bist du bereit für das nächste Training?',
            WORKOUT_MSG: 'OK, lass uns {{workout}} 60 Sekunden beginnen ... ',
            HELP_MSG: 'Sie können sagen, beginnen Sie mit einem zufälligen 60-Sekunden-Training. Sagen Sie überspringen und ich werde ein Training beenden und ein anderes zufälliges für Sie auswählen. Wenn du aufhören willst, sag mir einfach, ich soll aufhören. Machen Sie zwischen den Trainingseinheiten eine kurze Pause und drücken Sie sich nicht zu stark. Viel Glück!',
            GOODBYE_MSG: 'Auf Wiedersehen! Vielen Dank, dass Sie Sixty Second Workout verwenden!',
            FALLBACK_MSG: 'Entschuldigung, das weiß ich nicht. Bitte versuche es erneut.',
            ERROR_MSG: 'Entschuldigung, ich hatte Probleme damit, das zu tun, was Sie gefragt haben. Bitte versuche es erneut.',
            BICYCLE_CRUNCHES: 'Sehen Sie, wie viele Fahrradknirschen Sie machen können',
            CROSS_MOUNTAIN_CLIMBERS: 'Sehen Sie, wie viele Cross-Mountain-Kletterer Sie machen können',
            PLANKS_HIP_DIPS: 'Sehen Sie, wie viele Planken mit Hüftdips Sie machen können',
            PLANK: 'halte ein Brett für',
            TOE_REACHES: 'Sehen Sie, wie viele Zehen Sie erreichen können',
            SIDE_CRUNCHES: 'Sehen Sie, wie viele Crunches Sie von Seite zu Seite ausführen können',
            RUSSIAN_TWISTS: 'Sehen Sie, wie viele russische Wendungen Sie machen können',
            SKATER_SQUATS: 'Sehen Sie, wie viele Skater-Kniebeugen Sie machen können',
            SQUAT_JUMPS: 'Sehen Sie, wie viele Squat-Sprünge Sie ausführen können',
            ALTERNATING_LUNGES: 'Sehen Sie, wie viele abwechselnde Ausfallschritte Sie ausführen können',
            BURPEES: 'Sehen Sie, wie viele Burpees Sie machen können',
            SIDE_PLANK: 'mache eine Seitenplanke für',
            SITUPS: 'Sehen Sie, in wie vielen Situps Sie arbeiten können',
            PUSHUPS: 'Sehen Sie, wie viele Liegestütze Sie machen können',
            JUMPING_JACKS: 'Sehen Sie, in wie vielen Jumping Jacks Sie arbeiten können',
            GREAT_JOB: 'Gut gemacht!',
            GOOD_GOING: 'Gut gemacht! Ich wusste, dass du es schaffst!',
            NOT_BAD: 'Nicht schlecht!',
            MORE_PRACTICE: 'Ich denke du brauchst mehr Übung!',
            IMPRESSED: 'Wow, ich bin wirklich beeindruckt!',
            DO_BETTER: 'Du kannst es besser machen.',
            PRETTY_WELL: 'Ich dachte, du hast das ziemlich gut gemacht.',
            TAKE_BREAK: 'Vergiss nicht eine Pause zu machen. Etwas Wasser trinken. Mach dir keine Sorgen, ich bin gleich hier.',
            REMEMBER: 'Denken Sie daran, Sie können 60 Sekunden lang alles tun.',
            GOOD_JOB: 'Gute Arbeit, für die nächste, gib mir ein bisschen mehr Begeisterung!',
            WELL_DONE: 'Gut gemacht.',
            SOUNDED_HARD: 'Das klang, als wäre es schwer. Mach weiter!'
        }
    },
    ja: { // japanese
        translation: {
            WELCOME_MSG: '60秒ワークアウトへようこそ！ 60秒間実行するランダムなトレーニングを選択します。準備はいいですか？',
            GET_STARTED_MSG: "では、{{howLong}}分のトレーニングを始めましょう。準備はできたか？",
            READY_MSG: '{{cheer}}次のトレーニングの準備はできていますか？',
            WORKOUT_MSG: 'では、{{workout}}を60秒始めましょう。',
            HELP_MSG: 'ランダムな60秒のワークアウトを開始するように言うことができます。スキップと言ってください。ワークアウトを停止して、ランダムに別のワークアウトを選択します。止めたいのなら止めてワークアウトの合間に少し休憩を取り、あまり強く押しすぎないようにしてください。幸運を！',
            GOODBYE_MSG: 'さようなら！ 60秒ワークアウトをご利用いただきありがとうございます。',
            FALLBACK_MSG: 'すみません、それについては知りません。もう一度お試しください。',
            ERROR_MSG: '申し訳ありませんが、私はあなたが尋ねたことを行うのに苦労しました。もう一度やり直してください。',
            BICYCLE_CRUNCHES: '自転車でクランチできる回数を確認してください',
            CROSS_MOUNTAIN_CLIMBERS: 'いくつのクロスマウンテンクライマーができるか見てみましょう',
            PLANKS_HIP_DIPS: 'あなたができるヒップディップのある板の数を見てください',
            PLANK: 'の板を握る',
            TOE_REACHES: '何本のつま先まで届くか確認してください',
            SIDE_CRUNCHES: 'あなたが何回横にクランチできるか見てください',
            RUSSIAN_TWISTS: 'あなたが何回ロシアのひねりができるか見てください',
            SKATER_SQUATS: 'あなたができるスケータースクワットの数を見てください',
            SQUAT_JUMPS: 'スクワットジャンプの回数を確認してください',
            ALTERNATING_LUNGES: '何回交互に突進できるか見てみましょう',
            BURPEES: 'あなたができるバーピーの数を見てください',
            SIDE_PLANK: 'サイドプランクをする',
            SITUPS: 'あなたができる何situpsを見る',
            PUSHUPS: '腕立て伏せの数を確認する',
            JUMPING_JACKS: 'ジャンピングジャックの数を確認する',
            GREAT_JOB: 'よくやった！',
            GOOD_GOING: '良い調子！私はあなたがそれをすることができると知っていました！',
            NOT_BAD: '悪くない！',
            MORE_PRACTICE: 'もっと練習が必要だと思います！',
            IMPRESSED: 'わあ、本当に感動しました！',
            DO_BETTER: 'あなたはそれよりも良いことができます。',
            PRETTY_WELL: 'あなたはそれでかなりうまくやったと思いました。',
            TAKE_BREAK: '休憩を忘れずに。水を飲んでください。心配しないで、私はここにいます。',
            REMEMBER: '60秒間は何でもできることを覚えておいてください。',
            GOOD_JOB: 'いい仕事ですね、次の問題のために、もう少し気分を上げてください！',
            WELL_DONE: 'よくやった。',
            SOUNDED_HARD: 'それは難しいように聞こえました。がんばり続ける！'
        }
    },
    fr: { // french
        translation: {
            WELCOME_MSG: 'Bienvenue à Sixty Second Workout! Je choisirai un entraînement aléatoire à faire pendant soixante secondes. Es-tu prêt à commencer?',
            GET_STARTED_MSG: "OK, commençons une séance d'entraînement de {{howLong}} minutes! Es-tu prêt?",
            READY_MSG: '{{cheer}} Êtes-vous prêt pour la prochaine séance d\'entraînement?',
            WORKOUT_MSG: 'OK, {{workout}} soixante secondes, en commençant maintenant ...',
            HELP_MSG: 'Vous pouvez dire commencer pour commencer un entraînement aléatoire de soixante secondes. Dites sauter et j\'arrêterai un entraînement et en choisirai un autre au hasard. Si vous voulez arrêter, dites-moi simplement d\'arrêter. Assurez-vous de faire une courte pause entre les entraînements et ne vous forcez pas trop. Bonne chance!',
            GOODBYE_MSG: 'Au revoir! Merci d\'utiliser Sixty Second Workout!',
            FALLBACK_MSG: 'Désolé, je n\'en sais rien. Veuillez réessayer.',
            ERROR_MSG: 'Désolé, j\'ai eu du mal à faire ce que vous avez demandé. Veuillez réessayer.',
            BICYCLE_CRUNCHES: 'voyez combien de vélos vous pouvez faire',
            CROSS_MOUNTAIN_CLIMBERS: 'voir combien de grimpeurs en montagne vous pouvez faire',
            PLANKS_HIP_DIPS: 'voyez combien de planches avec des creux de hanche vous pouvez faire',
            PLANK: 'tenir une planche pour',
            TOE_REACHES: 'voyez combien d\'orteils vous pouvez faire en',
            SIDE_CRUNCHES: 'voir combien de craquements latéraux vous pouvez faire',
            RUSSIAN_TWISTS: 'voir combien de rebondissements russes vous pouvez faire',
            SKATER_SQUATS: 'voir combien de squats de patineur vous pouvez faire',
            SQUAT_JUMPS: 'voir combien de sauts accroupis vous pouvez faire',
            ALTERNATING_LUNGES: 'voyez combien de fentes alternées vous pouvez faire',
            BURPEES: 'voyez combien de burpees vous pouvez faire',
            SIDE_PLANK: 'faire une planche latérale pour',
            SITUPS: 'voir combien de situations vous pouvez faire',
            PUSHUPS: 'voir combien de pompes vous pouvez faire',
            JUMPING_JACKS: 'voir combien de jacks jumping vous pouvez faire',
            GREAT_JOB: 'Bon travail!',
            GOOD_GOING: 'Bon déroulement! Je savais que tu pouvais le faire!',
            NOT_BAD: 'Pas mal!',
            MORE_PRACTICE: 'Je pense que vous avez besoin de plus de pratique!',
            IMPRESSED: 'Wow, je suis vraiment impressionné!',
            DO_BETTER: 'Tu peux faire mieux que ça.',
            PRETTY_WELL: 'Je pensais que vous vous en sortiez assez bien.',
            TAKE_BREAK: 'N\'oubliez pas de faire une pause. Bois un peu d\'eau. Ne vous inquiétez pas, je serai ici.',
            REMEMBER: 'N\'oubliez pas que vous pouvez faire n\'importe quoi pendant soixante secondes.',
            GOOD_JOB: 'Bon travail, pour ce prochain, donnez-moi un peu plus d\'enthousiasme!',
            WELL_DONE: 'Bien joué.',
            SOUNDED_HARD: 'Celui-là sonnait comme si c\'était dur. Continuez!'
        }
    },
    it: { // italian
        translation: {
            WELCOME_MSG: 'Benvenuto in Sixty Second Workout! Prenderò un allenamento casuale per te da fare per sessanta secondi. Sei pronto per iniziare?',
            GET_STARTED_MSG: "OK, iniziamo un allenamento di {{howLong}} minuti! Siete pronti?",
            READY_MSG: '{{cheer}} Sei pronto per il prossimo allenamento?',
            WORKOUT_MSG: 'OK, {{workout}} sessanta secondi, a partire da ora ...',
            HELP_MSG: 'Puoi dire inizio per iniziare un allenamento casuale di sessanta secondi. Dì salta e interromperò un allenamento e sceglierò un altro a caso da fare. Se vuoi fermarti, dimmi solo di smettere. Assicurati di fare una breve pausa tra gli allenamenti e non sforzarti troppo. In bocca al lupo!',
            GOODBYE_MSG: 'Addio! Grazie per aver utilizzato Sixty Second Workout!',
            FALLBACK_MSG: 'Scusa, non lo so. Per favore riprova.',
            ERROR_MSG: 'Scusa, ho avuto problemi a fare quello che mi hai chiesto. Per favore riprova.',
            BICYCLE_CRUNCHES: 'guarda in quanti scricchiolii di bicicletta puoi fare',
            CROSS_MOUNTAIN_CLIMBERS: 'vedi in quanti alpinisti puoi fare',
            PLANKS_HIP_DIPS: 'guarda quante assi con tuffi dell\'anca puoi fare',
            PLANK: 'tenere una tavola per',
            TOE_REACHES: 'guarda in quante dita puoi raggiungere',
            SIDE_CRUNCHES: 'guarda in quanti scricchiolii laterali puoi fare',
            RUSSIAN_TWISTS: 'guarda in quanti colpi di scena russi puoi fare',
            SKATER_SQUATS: 'guarda in quanti squat skater puoi fare',
            SQUAT_JUMPS: 'guarda in quanti salti tozzi puoi fare',
            ALTERNATING_LUNGES: 'guarda in quanti affondi alternati puoi fare',
            BURPEES: 'vedi quanti burpees puoi fare',
            SIDE_PLANK: 'fare una sponda per',
            SITUPS: 'vedi quanti situps puoi fare',
            PUSHUPS: 'vedi quanti flessioni puoi fare',
            JUMPING_JACKS: 'vedi in quante prese saltanti puoi fare',
            GREAT_JOB: 'Ottimo lavoro!',
            GOOD_GOING: 'Ben fatto! Sapevo che potevi farlo!',
            NOT_BAD: 'Non male!',
            MORE_PRACTICE: 'Penso che tu abbia bisogno di più pratica!',
            IMPRESSED: 'Wow, sono davvero impressionato!',
            DO_BETTER: 'Puoi fare di meglio.',
            PRETTY_WELL: 'Pensavo fossi andato abbastanza bene.',
            TAKE_BREAK: 'Non dimenticare di fare una pausa. Bevi un pò d\'acqua. Non ti preoccupare, sarò qui.',
            REMEMBER: 'Ricorda, puoi fare qualsiasi cosa per sessanta secondi.',
            GOOD_JOB: 'Ottimo lavoro, per questo prossimo, dammi un po \'più di gusto!',
            WELL_DONE: 'Molto bene.',
            SOUNDED_HARD: 'Sembrava che fosse difficile. Continuate così!'
        }
    },
    pt: { // portuguese
        translation: {
            WELCOME_MSG: 'Bem-vindo ao exercício de sessenta segundos! Vou escolher um treino aleatório para você fazer por sessenta segundos. Você está pronto para começar?',
            GET_STARTED_MSG: "OK, vamos começar um treino de {{howLong}} minutos! Você está pronto?",
            READY_MSG: '{{cheer}} Você está pronto para o próximo treino?',
            WORKOUT_MSG: 'OK, vamos {{workout}} sessenta segundos, começando agora ...',
            HELP_MSG: 'Você pode dizer para começar um exercício aleatório de sessenta segundos. Diga pular e eu vou parar um treino e escolher outro aleatório para você fazer. Se você quiser parar, me diga para parar. Certifique-se de fazer uma pequena pausa entre os exercícios e não se esforce demais. Boa sorte!',
            GOODBYE_MSG: 'Adeus! Obrigado por usar o Sixty Second Workout!',
            FALLBACK_MSG: 'Desculpe, eu não sei sobre isso. Por favor, tente novamente.',
            ERROR_MSG: 'Desculpe, tive problemas para fazer o que você pediu. Por favor, tente novamente.',
            BICYCLE_CRUNCHES: 'veja quantas flexões de bicicleta você pode fazer em',
            CROSS_MOUNTAIN_CLIMBERS: 'veja quantos alpinistas que você pode fazer em',
            PLANKS_HIP_DIPS: 'veja quantas pranchas com quedas de quadril você pode fazer',
            PLANK: 'segure uma prancha por',
            TOE_REACHES: 'veja quantos dedos do pé você pode fazer em',
            SIDE_CRUNCHES: 'veja quantas flexões de lado a lado você pode fazer',
            RUSSIAN_TWISTS: 'veja quantas reviravoltas russas você pode fazer',
            SKATER_SQUATS: 'veja quantos agachamentos de skatistas você pode fazer em',
            SQUAT_JUMPS: 'veja quantos saltos de agachamento você pode fazer',
            ALTERNATING_LUNGES: 'veja quantos pulmões alternados você pode fazer em',
            BURPEES: 'veja quantos burpees você pode fazer em',
            SIDE_PLANK: 'faça uma prancha lateral para',
            SITUPS: 'veja quantas abdominais você pode fazer em',
            PUSHUPS: 'veja quantas flexões você pode fazer em',
            JUMPING_JACKS: 'veja quantas polichinelos você pode fazer em',
            GREAT_JOB: 'Bom trabalho!',
            GOOD_GOING: 'Bom andamento! Eu sabia que voce poderia fazer isso!',
            NOT_BAD: 'Não é ruim!',
            MORE_PRACTICE: 'Eu acho que você precisa de mais prática!',
            IMPRESSED: 'Uau, estou realmente impressionado!',
            DO_BETTER: 'Você pode fazer melhor do que isso.',
            PRETTY_WELL: 'Eu pensei que você se saiu muito bem nisso.',
            TAKE_BREAK: 'Não se esqueça de fazer uma pausa. Bebe um pouco de água. Não se preocupe, eu vou estar aqui.',
            REMEMBER: 'Lembre-se, você pode fazer qualquer coisa por sessenta segundos.',
            GOOD_JOB: 'Bom trabalho, para este próximo, me dê um pouco mais de entusiasmo!',
            WELL_DONE: 'Bem feito.',
            SOUNDED_HARD: 'Aquele parecia ser difícil. Mantem!'
        }
    },
    hi: { // hindi
        translation: {
            WELCOME_MSG: 'साठ सेकंड वर्कआउट में आपका स्वागत है! मैं आपको साठ सेकंड के लिए करने के लिए एक यादृच्छिक कसरत चुनूँगा। क्या आप शुरू करने के लिए तैयार हैं?',
            GET_STARTED_MSG: "ठीक है, चलो एक {{howLong}} मिनट कसरत शुरू करते हैं! आप तैयार हैं?",
            READY_MSG: '{{जयकार}} क्या आप अगले वर्कआउट के लिए तैयार हैं?',
            WORKOUT_MSG: 'ठीक है, चलो {{वर्कआउट}} साठ सेकंड, अब शुरू ...',
            HELP_MSG: 'आप कह सकते हैं कि एक यादृच्छिक साठ सेकंड की कसरत शुरू करने के लिए। स्किप कहो और मैं एक कसरत बंद कर दूंगा और तुम्हारे लिए एक और यादृच्छिक चुनूंगा। यदि आप रुकना चाहते हैं, तो मुझे रोकने के लिए कहें। वर्कआउट के बीच एक छोटा ब्रेक लेना सुनिश्चित करें और अपने आप को बहुत मुश्किल न धकेलें। सौभाग्य!',
            GOODBYE_MSG: 'अलविदा! साठ सेकंड वर्कआउट का उपयोग करने के लिए धन्यवाद!',
            FALLBACK_MSG: 'क्षमा करें, मुझे इस बारे में जानकारी नहीं है। कृपया पुन: प्रयास करें।',
            ERROR_MSG: 'क्षमा करें, आपने जो पूछा था, उसे करने में मुझे परेशानी हुई। कृपया पुन: प्रयास करें।',
            BICYCLE_CRUNCHES: 'देखें कि आप कितने साइकिल क्रंच कर सकते हैं',
            CROSS_MOUNTAIN_CLIMBERS: 'देखें कि आप कितने क्रॉस माउंटेन पर्वतारोही हैं',
            PLANKS_HIP_DIPS: 'देखें कि हिप डिप्स के साथ आप कितने प्लैंक कर सकते हैं',
            PLANK: 'के लिए एक तख़्त पकड़ो',
            TOE_REACHES: 'देखें कि आप कितने पैर की अंगुली तक पहुँच सकते हैं',
            SIDE_CRUNCHES: 'देखें कि आप कितने साइड साइड क्रंच कर सकते हैं',
            RUSSIAN_TWISTS: 'देखें कि आप कितने रूसी ट्विस्ट कर सकते हैं',
            SKATER_SQUATS: 'देखें कि आप कितने स्केटर स्क्वाट्स कर सकते हैं',
            SQUAT_JUMPS: 'देखें कि आप कितने स्क्वाट जंप कर सकते हैं',
            ALTERNATING_LUNGES: 'देखें कि आप कितने वैकल्पिक फेफड़ों में कर सकते हैं',
            BURPEES: 'देखें कि आप कितने ब्यूरो में कर सकते हैं',
            SIDE_PLANK: 'के लिए एक पक्ष तख़्त करना',
            SITUPS: 'देखें कि आप कितने सिटअप कर सकते हैं',
            PUSHUPS: 'देखें कि आप कितने पुशअप कर सकते हैं',
            JUMPING_JACKS: 'देखें कि आप कितने जंपिंग जैक लगा सकते हैं',
            GREAT_JOB: 'अच्छा काम!',
            GOOD_GOING: 'अच्छे जा रहे हो! मुझे मालूम था तुम यह कर लोगे!',
            NOT_BAD: 'बुरा नहीं!',
            MORE_PRACTICE: 'मुझे लगता है कि आपको अधिक अभ्यास की आवश्यकता है!',
            IMPRESSED: 'वाह, मैं वास्तव में प्रभावित हूँ!',
            DO_BETTER: 'आप उससे बेहतर कर सकते हैं।',
            PRETTY_WELL: 'मुझे लगा कि आपने उस पर बहुत अच्छा किया है।',
            TAKE_BREAK: 'एक ब्रेक लेने के लिए मत भूलना। कुछ पानी पिये। चिंता न करें, मैं यहीं रहूंगा।',
            REMEMBER: 'याद रखें, आप साठ सेकंड के लिए कुछ भी कर सकते हैं।',
            GOOD_JOB: 'अच्छा काम है, इस के लिए अगले एक, मुझे थोड़ा और दे दो!',
            WELL_DONE: 'बहुत बढ़िया।',
            SOUNDED_HARD: 'यह एक लग रहा था जैसे यह मुश्किल था। कीप आईटी उप!'
        }
    }
};