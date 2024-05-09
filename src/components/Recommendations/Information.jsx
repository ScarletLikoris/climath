import React from 'react';
import './Information.scss';

const Information = ({ content }) => {
    return (
        <div className="information">
            <div>
                {content == 'temperature' ? (
                    <div className="information__content">
                        <h1>Температура в помещении</h1>
                        <h2>
                            Почему правильная температура в доме — это важно и к
                            чему приводит несоблюдение температурных норм
                        </h2>
                        <p>
                            Микроклимат в квартире влияет на физическое и
                            эмоциональное состояние жильцов. Особенно заметно
                            повышенная или пониженная температура отражается на
                            людях с сердечно-сосудистыми, респираторными
                            заболеваниями и частыми аллергическими реакциями.
                            <br />
                            <br />
                            Духота может привести к обезвоживанию организма,
                            недосыпу, повышенному давлению, головным болям,
                            сухости слизистых, сухому кашлю и затрудненному
                            дыханию. <br />
                            <br /> Повышенная температура вызывает снижение
                            физической активности и работоспособности, негативно
                            влияет на работу сердца.
                            <br />
                            <br /> Низкая температура может обострить
                            хронические болезни костно-мышечной системы,
                            воспалительные процессы и респираторные заболевания.
                            Холодный воздух может снизить иммунитет и даже
                            спровоцировать болезнь «холода» почек.
                            <br />
                            <br /> Особенно внимательно за температурным режимом
                            стоит следить родителям малышей, поскольку дети
                            очень чувствительны к перепадам температуры.
                        </p>
                        <h2>Когда начинается отопительный сезон</h2>
                        <p>
                            В домах, подключенных к сетям инженерно-технического
                            обеспечения, отопительный сезон начинается в
                            установленные местными властями сроки.
                            <br />
                            <br /> Обычно отопление включают через пять дней
                            подряд, в которые среднесуточная температура на
                            улице составляла +8°С.
                            <br />
                            <br /> Регионы могут устанавливать различные сроки
                            отопительного периода. Обычно он длится восемь
                            месяцев — с октября по май.
                        </p>
                        <h2>Какая температура зимой должна быть в квартире</h2>
                        <p>
                            Согласно СанПин, ГОСТу об оказании ЖКУ собственникам
                            и пользователям жилых помещений, температура в
                            квартире должна составлять 18–20°С. В угловых
                            комнатах температура может быть выше на 2°С.
                            <br />
                            <br /> В отопительный сезон для каждого помещения
                            устанавливают свои нормы температуры:
                            <br />
                            <br />
                            <ul>
                                <li>в жилых помещениях это 18–24°С;</li>
                                <li>в кухне — 18–26°С;</li>
                                <li>
                                    в ванной и туалетной комнатах — 18–26°С;
                                </li>
                                <li>в кладовой — 12–22°С.</li>
                            </ul>
                            <br /> Превышать температуру можно не более чем на
                            4°С. Днем снижать температуру нельзя, а вот в ночное
                            время с 00:00 до 5:00 температуру можно снизить, но
                            только на 3°С.
                            <br />
                            <br /> При этом отопление должны подавать постоянно,
                            суммарный перерыв в подаче тепла не может превышать
                            24 часов.
                            <br />
                            <br /> В теплое время года температура в жилых
                            комнатах может составлять 20–28°С. Для остальных
                            помещений нормы не установлены.
                        </p>
                        <h2>Допустимая и оптимальная температуры</h2>
                        <p>
                            ГОСТ 30494-2011 устанавливает понятие допустимой и
                            оптимальной температуры в жилом помещении.
                            <br />
                            <br />
                            Допустимой является температура, которая не
                            оказывает негативного влияния на организм человека
                            при длительном нахождении последнего в квартире.
                            Оптимальная температура означает, что она комфорта
                            как минимум для 80% людей.
                            <br />
                            <br /> Для жилых комнат оптимальной является
                            температура от 20 до 22°С, допустимая — от 18 до
                            24°С.
                            <br />
                            <br /> Для жилых комнат в районах с температурой
                            наиболее холодной пятидневки оптимальная температура
                            составляет от 21 до 23°С, а допустимая — от 20 до
                            24°С.
                        </p>
                    </div>
                ) : content == 'humidity' ? (
                    <div className="information__content">
                        <h1>Влажность в помещении</h1>
                        <h2>
                            Почему правильная влажность в доме — это важно и к
                            чему приводит несоблюдение норм
                        </h2>
                        <p>
                            Излишне влажный воздух в квартире нежелателен, как и
                            слишком сухой, и может привести к неприятным
                            последствиям: <br />
                            <br />
                            <ul>
                                <li>
                                    повышается частота заболеваний дыхательных
                                    путей, они тяжело поддаются лечению и могут
                                    стать хроническими;
                                </li>
                                <li>
                                    обостряется астма и хронические заболевания
                                    бронхов;
                                </li>
                                <li>
                                    повышается риск обострения аллергических
                                    реакций;
                                </li>
                                <li>
                                    возможно отравление токсичными парами,
                                    которые выделяются при повышенной влажности
                                    из строительных материалов;
                                </li>
                                <li>
                                    если спортивные занятия проходят в помещении
                                    с повышенной влажностью, это может грозить
                                    тепловым ударом.
                                </li>
                            </ul>
                            <br />
                            Низкая влажность в квартире способствует ухудшению
                            самочувствия и развитию различных заболеваний:
                            <br />
                            <br />
                            <ul>
                                <li>
                                    в таких условиях слизистые оболочки в
                                    организме пересыхают гораздо быстрее,
                                    провоцируя першение в горле, кашель. Это
                                    осложняет течение простуды, астмы, ОРВИ,
                                    заболеваний бронхов и легких;
                                </li>
                                <li>
                                    появляется чувство сухости в носоглотке,
                                    снижается местный иммунитет, из-за чего
                                    заразиться инфекционно-вирусными
                                    заболеваниями гораздо проще. Также может
                                    развиться синдром сухого глаза, способный
                                    привести к развитию других глазных
                                    заболеваний;
                                    <br /> обостряются кожные заболевания, может
                                    появиться шелушение, развиться ломкость и
                                    сухость волос;
                                </li>
                                <li>
                                    чаще обостряются аллергии, поскольку в сухом
                                    воздухе респираторные аллергены гораздо
                                    активнее;
                                </li>
                                <li>
                                    снижается работоспособность, появляются
                                    слабость и головные боли, ухудшается сон;
                                    <br />
                                    из-за сухого воздуха бактерии и вирусы более
                                    подвижны, это значительно увеличивает риск
                                    заражения. Их концентрация минимальна, если
                                    влажность воздуха составляет от 40% до 60%
                                </li>
                            </ul>
                        </p>
                        <h2>Нормы влажности в квартире</h2>
                        <p>
                            Нормы влажности в жилом помещении по ГОСТ — 30–45%
                            зимой и 30–60% летом. Существенным превышением
                            считаются показатели больше 60% зимой и больше 65%
                            летом.
                            <br />
                            <br /> Оптимальный уровень влажности в квартире — от
                            40% до 60%.
                        </p>
                        <h2>От чего зависит влажность в квартире</h2>
                        <p>
                            На уровень влажности в помещении влияют многие
                            факторы:
                            <br />
                            <br />
                            <ul>
                                <li>
                                    время года. Зимой влажность ниже, поскольку
                                    холодный воздух удерживает меньше водяного
                                    пара, чем теплый;
                                </li>
                                <li>
                                    бытовые условия. Увлажнители помогают
                                    повысить влажность в квартире. Отопительные
                                    приборы, наоборот, высушивают воздух;
                                </li>
                                <li>
                                    географическое расположение. В тропических
                                    широтах уровень влажности выше, чем в
                                    северных, также наличие рядом с домом
                                    водоема способствует нормализации количества
                                    водяного пара в воздухе.
                                </li>
                            </ul>
                        </p>
                    </div>
                ) : content == 'co2' ? (
                    <div className="information__content">
                        <h1>Концентрация СО2</h1>
                        <p>
                            Свежесть воздуха — это эмпирическая величина,
                            которая показывает, насколько хорошо воздух насыщает
                            организм кислородом, насколько им легко и приятно
                            дышать. Но содержание кислорода трудно измерять:
                            датчики сложные и дорогостоящие. Поэтому изначально
                            в индустрии климата так сложилось, что свежесть
                            воздуха стали оценивать по уровню CO₂. <br />
                            <br />
                            Углекислый газ выбрали для оценки качества воздуха
                            из-за того, что его можно измерить с высокой
                            точностью и из-за его сильного влияния на состояние
                            организма человека. По его концентрации судят также
                            о содержании в воздухе других вредных веществ.
                        </p>
                        <h2>
                            Почему насыщенность воздуха кислородом — это важно и
                            к чему приводит несоблюдение норм
                        </h2>
                        <p>
                            В высоких концентрациях углекислый газ токсичен, его
                            относят к удушающим газам и IV классу опасности. При
                            повышении концентрации CO₂ в воздухе (0,15%—0,2% или
                            1500—2000 ppm), возникает общая вялость, снижается
                            работоспособность и концентрация внимания,
                            появляется сонливость и слабость. Содержание CO₂
                            свыше 0,7% или 7000 ppm считается опасным для
                            здоровья человека.
                            <br />
                            <br /> Концентрацию углекислого газа оценивают в PPM
                            (частей на миллион) — количество кубических
                            сантиметров CO₂ на 1 кубометр воздуха. То есть,
                            когда говорят уровень CO₂ в помещении составляет 800
                            ppm — это означает, что в 1 м³ воздуха содержится
                            800 см³ CO₂.
                        </p>
                        <h2>Нормы концентрации углекислого газа в квартире</h2>
                        <p>
                            Оптимальные и допустимые значения содержания
                            углекислого газа в помещении установлены в ГОСТ
                            30494-2011 «Здания жилые и общественные. Параметры
                            микроклимата в помещениях».
                            <br />
                            <br /> Оптимальным содержанием углекислого газа в
                            помещении называются показатели, которые
                            обеспечивают нормальное состояние организма и
                            ощущение комфорта. Допустимые показатели — это
                            значения, которые при длительном воздействии на
                            человека могут привести к ощущению дискомфорта,
                            ухудшению самочувствия и понижению
                            работоспособности, но при этом не вызывают ухудшение
                            здоровья.
                            <br />
                            <br /> Для жителей больших городов оптимальным
                            содержанием CO₂ в помещении является 800 ppm. Это
                            считается высоким качеством воздуха. Допустимая
                            концентрация углекислого газа находится в пределах
                            1000–1400 ppm. Концентрация свыше этих показателей
                            говорит о низком качестве воздуха, что негативно
                            влияет на организм человека.
                        </p>
                        <h2>Основные причины повышения CO₂ в помещении</h2>
                        <p>
                            Существует несколько основных причин повышенного
                            уровня СО₂ в помещении.
                            <br />
                            <br /> Первая причина — это люди, одновременно
                            находящиеся в помещении, и их деятельность. Чем
                            больше людей, тем активнее вырабатывается углекислый
                            газ. Особо остро эта проблема стоит в офисах.
                            Офисному сотруднику должна обеспечиваться площадь
                            рабочего места не менее 4,5 м². Но работодатели
                            часто не соблюдают нормативы и получается, что в
                            маленьком офисе одновременно находится большое
                            количество активно дышащих людей. Поддерживать
                            уровень углекислого газа в пределах нормы в подобной
                            ситуации достаточно проблематично.
                            <br />
                            <br /> Вторая — это герметичные пластиковые окна.
                            Изначально здания проектировались так, чтобы воздух
                            поступал через щели в окнах или через неплотности в
                            строительных конструкциях. Но в погоне за утеплением
                            и шумоизоляцией, массовой заменой обычных окон на
                            герметичные пластиковые, люди совершенно забыли о
                            том, как воздух будет поступать в помещение. В новых
                            домах с пластиковыми окнами проектировщики это
                            предусмотрели и на этапе проектирования закладывают
                            наличие приточных клапанов.
                            <br />
                            <br /> Третья причина — неработающая вытяжка. По
                            мере эксплуатации вентиляционные вытяжки сильно
                            засоряются, это приводит к слабой тяге и как
                            следствие низкому уровню притока свежего воздуха с
                            улицы. Нередки ситуации, когда во время ремонта
                            вентиляционные отверстия и вовсе заделывают, что
                            полностью останавливает работу вентиляционной
                            системы. Нет тяги в системе вентиляции — нет притока
                            свежего воздуха с улицы.
                        </p>
                    </div>
                ) : (
                    <div>ошибка</div>
                )}
            </div>
        </div>
    );
};

export default Information;
