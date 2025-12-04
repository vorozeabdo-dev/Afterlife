
import React, { useState } from 'react';
import { MapPin, Zap, ShieldAlert, FileText, X, BookOpen } from 'lucide-react';
import { SECTORS, SOCIAL_LINKS } from '../constants';
import { SectorData } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface FooterProps {
    currentSector: SectorData;
}

// --- LEGAL TEXT CONSTANTS (EXHAUSTIVE & PROTECTIVE) ---

const PRIVACY_POLICY_TEXT = `
1. ПРЕАМБУЛА И СТАТУС ПРОЕКТА
1.1. Настоящий веб-сайт (далее — «Ресурс») является некоммерческим, академическим учебно-демонстрационным проектом (Portfolio).
1.2. Ресурс не является средством массовой информации, официальным представительством бизнеса или торговой площадкой.
1.3. Владелец Ресурса (далее — «Разработчик») действует как физическое лицо в целях самообразования и демонстрации профессиональных навыков (Web Development).

2. ОТСУТСТВИЕ СБОРА ПЕРСОНАЛЬНЫХ ДАННЫХ
2.1. Ресурс технически НЕ предназначен для сбора, обработки, хранения или передачи персональных данных пользователей в понимании Федерального закона № 152-ФЗ «О персональных данных».
2.2. Любые поля ввода информации на Ресурсе (включая, но не ограничиваясь: «Имя», «Телефон», «Email», «Дата рождения», «Номер карты») являются интерактивными декоративными элементами (Mockup-forms).
2.3. Вводимая пользователем информация не сохраняется в базах данных (SQL/NoSQL), не отправляется на сервер (Backend) и не передается третьим лицам.
2.4. Данные уничтожаются автоматически в момент обновления страницы (F5) или закрытия вкладки браузера (Client-side volatile state).

3. ФАЙЛЫ COOKIE И ТРЕКИНГ
3.1. Ресурс не использует маркетинговые, аналитические или рекламные файлы Cookie (Яндекс.Метрика, Google Analytics, Pixel FB и др.).
3.2. Ресурс не создает профилей пользователей и не отслеживает поведение посетителей.
3.3. Использование технологии LocalStorage допускается исключительно для сохранения обезличенных настроек интерфейса (тема оформления, выбранный сектор города) на стороне клиента.

4. БЕЗОПАСНОСТЬ И ОТКАЗ ОТ ГАРАНТИЙ
4.1. В связи с учебным характером проекта, Разработчик не гарантирует использование протоколов шифрования (SSL/TLS) промышленного уровня на всех этапах.
4.2. Пользователь настоящим уведомлен о категорическом запрете ввода реальных конфиденциальных данных (паролей, номеров паспортов, банковских реквизитов) в любые формы на Ресурсе.
4.3. Разработчик не несет ответственности за утечку данных, которые Пользователь добровольно и ошибочно ввел в интерфейс-имитацию.
`;

const TERMS_OF_USE_TEXT = `
1. КРИТИЧЕСКОЕ УВЕДОМЛЕНИЕ: ОТСУТСТВИЕ АФФИЛИАЦИИ
1.1. Настоящий Ресурс является неофициальным фанатским/учебным макетом.
1.2. Разработчик Ресурса НЕ ЯВЛЯЕТСЯ представителем, партнером, сотрудником или филиалом реально существующего компьютерного клуба «Afterlife» (г. Тула) или любых связанных с ним юридических лиц.
1.3. Все совпадения с реальными наименованиями, адресами (г. Тула, пр. Ленина 112, ул. Демонстрации 27к1), логотипами и элементами фирменного стиля носят исключительно имитационный характер.

2. ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ (FAIR USE)
2.1. Использование товарных знаков, логотипов, фотографий интерьеров и графических материалов на Ресурсе осуществляется в образовательных и информационных целях (принцип добросовестного использования / Fair Use).
2.2. Разработчик не претендует на авторство или права владения указанными материалами. Все права принадлежат их законным правообладателям.
2.3. Если Вы являетесь правообладателем и считаете, что использование материалов на данном учебном макете нарушает Ваши права, незамедлительно свяжитесь с Разработчиком для удаления спорного контента (Takedown Request).

3. ОТКАЗ ОТ ПУБЛИЧНОЙ ОФЕРТЫ (СТ. 437 ГК РФ)
3.1. Информация, размещенная на Ресурсе (включая цены, тарифные сетки «Утро/Ночь/Пакет», характеристики оборудования, списки игр), является условной (Lorem Ipsum) и служит для заполнения макета.
3.2. Указанная информация НЕ ЯВЛЯЕТСЯ публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса РФ.
3.3. Разработчик не обязан оказывать услуги по указанным ценам и не гарантирует наличие указанного оборудования.

4. ИМИТАЦИЯ ПЛАТЕЖНЫХ ОПЕРАЦИЙ
4.1. Функциональные элементы «Забронировать», «Пополнить баланс», «Оплатить» являются программной симуляцией (UI Simulation).
4.2. Ресурс не подключен к банковскому эквайрингу. Осуществление реальных финансовых транзакций на Ресурсе технически невозможно.
4.3. Разработчик не несет ответственности за любые действия Пользователя, направленные на попытку перевода средств по реквизитам, случайно или намеренно указанным в макете.

5. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ
5.1. Ресурс предоставляется на условиях «КАК ЕСТЬ» (AS IS).
5.2. Разработчик не несет ответственности за любой прямой или косвенный ущерб, возникший в результате использования Ресурса или невозможности его использования.
5.3. Используя Ресурс, Пользователь подтверждает, что осознает его статус «Студенческого Портфолио» и отказывается от любых судебных и досудебных претензий к Разработчику.

6. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ
6.1. Разработчик оставляет за собой право в любой момент изменить, удалить или заблокировать Ресурс без уведомления пользователей.
6.2. Продолжение использования Ресурса означает безоговорочное принятие условий данного Соглашения.
`;

const CLUB_RULES_LIST = [
  "Компьютерный клуб “AFTERLIFE” является частным заведением, поэтому администрация вправе отказать в посещении клуба любому клиенту без объяснения причин отказа.",
  "Администрация клуба имеет право удалить клиента из клуба без возврата денег, при нарушении правил клуба.",
  "Клиент обязан оплатить услуги клуба авансом, согласно установленным расценок.",
  "Посетители в нетрезвом состоянии, в состоянии наркотического опьянения, а также в грязной одежде, либо распространяющие резкий запах не обслуживаются и удаляются из клуба.",
  "Детям до 18 лет разрешается посещать клуб с 8-00 до 22-00. При непредоставлении документов (любой документ с фотокарточкой) о наличии 18 лет – клиент на ночь не допускается, а предоплата не возвращается.",
  "Клуб не несет ответственности за пропажу вещей на территории клуба.",
  "В Клубе предусмотрен возврат денежных средств за оплаченную услугу в случае возникновения форс-мажорных ситуаций (отключение электричества, другие обстоятельства непреодолимой силы) или в случае малого или полного неиспользования пользователем оплаченной услуги. В остальных случаях возврат денежных средств не предусмотрен.",
  "Запрещается находиться в компьютерном зале Клуба, не оплатив рабочее время за компьютером или не забронировав его на ближайший час.",
  "Запрещается спать за компьютером.",
  "Доступ к сайтам, содержимое которых противоречит законодательству РФ, запрещается и может быть заблокирован. В спорных случаях окончательное решение о блокировании доступа к тому или иному ресурсу принимается администрацией клуба.",
  "Запрещается оскорблять других посетителей в устной и письменной форме – нарушители будут оштрафованы удалением купленного времени.",
  "Запрещается курить (парить и прочее) и распивать алкогольные напитки на территории клуба.",
  "Запрещается мусорить в клубе и на прилегающей территории.",
  "Запрещается работа двух людей за одним компьютером. При скоплении большого количества людей администратор вправе удалить всех, кроме тех, кто непосредственно находится за компьютером.",
  "Если в результате действий клиента клуб понес материальный ущерб, то клиент обязан полностью компенсировать этот ущерб.",
  "Файлы клиентов на компьютерах клуба сохраняются до окончания арендованного времени. Дальнейшая их сохранность не гарантируется.",
  "Клуб не несет ответственности за функционирование серверов в интернете и ошибки в используемом программном обеспечении.",
  "Клиент обязан выполнять указания администратора, касающиеся соблюдения настоящих правил, правил безопасности и технических условий эксплуатации компьютера.",
  "Администратор обязан оказывать помощь клиенту в случае возникновения технических проблем.",
  "Клиент не имеет право: самостоятельно передвигать системные блоки, разъединять составные части компьютера и сети, прикасаться к элементам электросети, питающей компьютеры и сетевые устройства.",
  "Клиент не имеет права изменять настройки операционной системы, устанавливать и удалять программы, осуществлять иное несанкционированное вмешательство в работу компьютера и сети.",
  "Запрещается установка любого нелицензионного ПО: crack-версии, nulled-версии, любое другое ПО с отсутствующей лицензией на использование. Исключением является ПО распространяющееся по свободной лицензии - freeware или демо-версия.",
  "Запрещен прием пищи за ПК (для приема пищи есть специальная зона) и прием пищи и напитков, принесенных с собой, а не приобретенных на территории клуба (воду можно).",
  "Учётная запись пользователя в системе клуба может быть использована только её владельцем. Запрещается передавать учётные данные аккаунта третьим лицам, а также оставлять открытую сессию на компьютере для пользования другим человеком.",
  "Посещая клуб, клиент автоматически соглашается с настоящими правилами.",
  "Настоящие правила могут быть дополнены администрацией клуба."
];

const Footer: React.FC<FooterProps> = ({ currentSector }) => {
  const [activeLegalDoc, setActiveLegalDoc] = useState<'privacy' | 'terms' | 'rules' | null>(null);

  const formatLegalText = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (!line.trim()) return <br key={i} />;
      // Bold numbered headers (1., 2. etc)
      if (/^\d+\./.test(line)) {
        return <p key={i} className="font-orbitron font-bold text-white mt-4 mb-2 text-sm md:text-base">{line}</p>;
      }
      // Bold sub-headers (1.1, 2.1 etc)
      if (/^\d+\.\d+/.test(line)) {
        return <p key={i} className="font-rajdhani text-gray-300 text-xs md:text-sm pl-4 mb-1"><strong className="text-cyber-cyan">{line.split(' ')[0]}</strong> {line.substring(line.indexOf(' ')+1)}</p>;
      }
      return <p key={i} className="font-rajdhani text-gray-400 text-xs md:text-sm mb-1">{line}</p>;
    });
  };

  return (
    <>
      <footer id="контакты" className="bg-cyber-black border-t border-white/10 pt-10 pb-6 relative text-sm overflow-hidden flex flex-col">
        
        {/* Background Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 mb-8">
          
          {/* LEFT GROUP: Logo & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
              
              {/* Logo */}
              <div className="flex items-center gap-3 group select-none cursor-default">
                  <div className="w-8 h-8 flex items-center justify-center bg-cyber-yellow text-black rounded-sm group-hover:brightness-110 transition-all">
                      <Zap size={18} fill="currentColor" />
                  </div>
                  <span className="font-orbitron font-bold text-lg text-white tracking-wider">AFTERLIFE</span>
              </div>

              {/* Divider (Desktop) */}
              <div className="hidden md:block w-px h-5 bg-white/10"></div>

              {/* Social Icons - ONLY VK */}
              <div className="flex items-center gap-8 md:gap-5">
                  <a
                    href={SOCIAL_LINKS.vk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#0077FF] transition-colors duration-300"
                    aria-label="VKontakte"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512" 
                      className="w-8 h-8 fill-current" 
                    >
                      <path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30.6 71.1-73.8 117.7-14 14.6-20.5 19.2-28.2 19.2-5.4 0-13.2-6.3-13.2-24.6V117.7c0-15.6-4.5-21.7-17.4-21.7H193.3c-9.6 0-15.4 7.1-15.4 13.8 0 1.4 1 2.8 3.7 4.1 11.7 3.3 12.9 15 12.9 41.5v62.9c0 13.8-2.5 16.3-7.9 16.3-14.8 0-50.8-54.3-72.1-116.3-4.2-12.1-12-16.7-28-16.7H27.7c-17.8 0-21.4 8.5-21.4 17.8 0 16.7 21.4 99.4 99.7 208.8 52.8 73.8 126.9 113.8 193.8 113.8 40.5 0 45.3-9 45.3-24.5V359c0-18 3.8-21 16.5-21 9.2 0 25 4.6 61.8 40.1 42 42 49 55.4 72.8 55.4h58.9c17.8 0 26.7-8.9 21.5-26.4-5.6-17.3-25.9-42.5-52.9-72.2-14.5-16.5-36.1-34.4-42.6-43.3-9-11.8-6.3-17 0-27.4 0 0 71.3-100.3 78.9-136.5z"/>
                    </svg>
                  </a>
              </div>
          </div>

          {/* RIGHT GROUP: Addresses */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-6 md:pt-0">
              {Object.values(SECTORS).map((sector, index, array) => (
                  <div key={sector.id} className="flex items-center justify-center w-full md:w-auto">
                      {/* Address Item */}
                      <div className="flex items-center gap-3 group px-0 md:px-4">
                          <div className={`text-gray-600 group-hover:text-cyber-cyan transition-colors hidden sm:block`}>
                              <MapPin size={16} />
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 text-center sm:text-left">
                              <span className="font-rajdhani font-bold text-gray-300 uppercase tracking-wide group-hover:text-white transition-colors text-xs sm:text-sm">
                                  {sector.address}
                              </span>
                              <a 
                                  href={`tel:${sector.phone.replace(/[^0-9+]/g, '')}`}
                                  className="font-mono text-cyber-cyan hover:text-white transition-colors text-xs tracking-wider font-bold whitespace-nowrap"
                              >
                                  {sector.phone}
                              </a>
                          </div>
                      </div>

                      {/* Divider between items */}
                      {index < array.length - 1 && (
                          <div className="hidden md:block w-px h-5 bg-white/20"></div>
                      )}
                  </div>
              ))}
          </div>

        </div>

        {/* BOTTOM: Legal Links (Replaces Copyright) */}
        {/* Changed from absolute to relative margin-top to avoid overlap */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 pt-6 mt-4 border-t border-white/5 relative z-10">
            <button 
                onClick={() => setActiveLegalDoc('privacy')}
                className="text-[10px] text-gray-500 hover:text-cyber-cyan font-mono uppercase tracking-widest transition-colors flex items-center gap-1"
            >
                <ShieldAlert size={10} /> ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
            </button>
            <span className="hidden md:block text-gray-700">|</span>
            <button 
                onClick={() => setActiveLegalDoc('terms')}
                className="text-[10px] text-gray-500 hover:text-cyber-pink font-mono uppercase tracking-widest transition-colors flex items-center gap-1"
            >
                <FileText size={10} /> ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
            </button>
            <span className="hidden md:block text-gray-700">|</span>
            <button 
                onClick={() => setActiveLegalDoc('rules')}
                className="text-[10px] text-gray-500 hover:text-cyber-yellow font-mono uppercase tracking-widest transition-colors flex items-center gap-1"
            >
                <BookOpen size={10} /> ПРАВИЛА КЛУБА
            </button>
             <span className="hidden md:block text-gray-700">|</span>
             <span className="text-[10px] text-gray-700 font-mono uppercase tracking-widest">
                © 2025 PORTFOLIO PROJECT
            </span>
        </div>
      </footer>

      {/* LEGAL MODAL - STRICT FLEXBOX SANDWICH STRUCTURE */}
      <AnimatePresence>
        {activeLegalDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-3xl max-h-[85vh] flex flex-col bg-[#0a0a0a] border border-cyber-pink/50 rounded-lg shadow-2xl overflow-hidden relative"
            >
               {/* 1. HEADER (Top Bun) - Fixed */}
               <div className="flex-none p-6 border-b border-white/10 flex items-center justify-between bg-[#0a0a0a]">
                  <div className="flex items-center gap-3">
                      <ShieldAlert className="text-cyber-pink" />
                      <h3 className="font-orbitron font-bold text-lg md:text-xl text-white uppercase tracking-wider">
                          {activeLegalDoc === 'privacy' ? 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ' : 
                           activeLegalDoc === 'rules' ? 'ПРАВИЛА ПОСЕЩЕНИЯ КЛУБА AFTERLIFE' : 
                           'ЮРИДИЧЕСКИЙ ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ'}
                      </h3>
                  </div>
                  <button onClick={() => setActiveLegalDoc(null)} className="text-gray-500 hover:text-white transition-colors">
                      <X size={24} />
                  </button>
               </div>

               {/* 2. BODY (Meat) - Scrollable & Fills Space */}
               <div className="flex-1 overflow-y-auto p-6 text-sm text-gray-300 space-y-4 bg-[#0a0a0a] custom-scrollbar">
                  {activeLegalDoc === 'rules' ? (
                    <ol className="list-decimal pl-5 space-y-4 font-rajdhani text-gray-300">
                        {CLUB_RULES_LIST.map((rule, i) => (
                            <li key={i} className="pl-2 leading-relaxed">
                                {rule}
                            </li>
                        ))}
                    </ol>
                  ) : (
                    <div className="prose prose-invert max-w-none">
                        {formatLegalText(activeLegalDoc === 'privacy' ? PRIVACY_POLICY_TEXT : TERMS_OF_USE_TEXT)}
                    </div>
                  )}
               </div>

               {/* 3. FOOTER (Bottom Bun) - Fixed */}
               <div className="flex-none p-6 border-t border-white/10 bg-[#0a0a0a] flex justify-end z-10">
                  <button 
                      onClick={() => setActiveLegalDoc(null)}
                      className="bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan font-bold py-3 px-8 uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] w-full sm:w-auto text-center"
                  >
                      ПРИНЯТЬ И ЗАКРЫТЬ
                  </button>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
