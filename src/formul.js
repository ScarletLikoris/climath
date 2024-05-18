//начальные значения

q_mt = 93; // метаболистическая теплота,  Вт/м2
n = 0; // КПД механической работы
w0 = 0; // относительная скорость перемещения в неподвижном воздухе
r0 = 0.5; // сопротивление теплопередаче одежды
t_v; // текущая температура С ДАТЧИКОВ
fi; // текущая влажность С ДАТЧИКОВ
c_n; // текущий СО2 С ДАТЧИКОВ
t0 = 33.1; // температура открытых участков тела
w = 0.2; // подвижность воздуха В ТЕПЛОЕ ВРЕМЯ
w = 0.15; // подвижность воздуха В ХОЛОДНОЕ ВРЕМЯ
t_min = 14; // температура поверхностей мин
t_max = 20; // температура поверхностей макс
c0 = random(250, 400); // концентрация СО2 на улице
e = 0.8; // интегральная степень черноты излучающей поверхности тела человека
o = 5.67 * Math.pow(10, -8); // постоянная Стефана-Больцмана
b = 0.8; // коэффициент эффективно излучающей поверхности
fi_tr = 0.17; //угловой коэффициент излучения с поверхности тела человека на наиболее холодную ограждающую поверхность

//начальные переменные

q_tp; // внутренняя теплопродукция тела человека
t_k; // температура кожного покрова человека
p_v; // парциальное давление водяных паров
q_dp; // потери теплоты через кожу человека за счет диффузии паров
q_ip; // количество теплоты, затрачиваемое на испарение жидкости с поверхности тела человека
q_dc; //скрытая теплота, выделяемая в процессе дыхания
q_dy; // явная теплота, выделяемая в процессе дыхания
q_n; // тепловой поток, который необходимо удалять излучением и конвекцией с поверхности тела человека для обеспечения его комфортного теплового состояния
q_l; // лучистый тепловой поток, уходящий с поверхности тела человека
t_p0; // средняя радиационная температура помещения
q_k; // конвективный тепловой поток, уходящий с поверхности тела человека
q_f; // тепловой поток, уходящий с поверхности тела человека
q_lm; // коэффициент учета радиационного охлаждения человека
delta_t; // максимальная разность температур ограждающих поверхностей
c; // избыточная концентрацию СО2 в помещении
k1; // коэффициент теплового состояния человека
k2; // коэффициент, учитывающий влияние на комфортность микроклимата радиационного охлаждения
k3; // коэффициент, учитывающий влияние на комфортность микроклимата асимметрии теплового излучения
k4; // коэффициент, учитывающий соответствие качества воздуха нормам, установленным ГОСТ 30494-2011
w_comfort; //уровень комфортности микроклимата

//расчеты k1
q_tp = q_mt(1 - n);
t_k = 35.7 - 0.032 * q_tp;
p_v = 0.01 * fi * (0.305 * t_v * t_v - 0.1027 * t_v + 7.3596);
q_dp = 0.41 * (1.92 * t_k - 25.3 - p_v);
q_ip = 0.49 * (q_mt * (1 - n) - 50);
q_dc = 0.0027 * q_mt * (44 - p_v);
q_dy = 0.0014 * q_mt * (34 - t_v);
q_n = q_tp - q_dp - q_ip - q_dc - q_dy;
t_p0 = t_v - 2;
q_l = e * o * b * (Math.pow(t0 + 273, 4) - Math.pow(t_p0 + 273, 4));
q_k = 12.1 * Math.sqrt(w + w0) * (t0 - t_v);
q_f = q_l + q_k;

k1 = Math.pow(-1, n) * (1 - Math.abs(q_n - q_f) / q_n);

//расчеты k2
q_lm = e * o * b * fi_tr * (Math.pow(t0 + 273, 4) - Math.pow(t_p0 + 273, 4));
if (t_v - t_min <= 2) {
    k2 = 1;
} else {
    k2 = (q_n - q_lm) / q_n;
}

//расчеты k3
delta_t = t_max - t_min;
if (delta_t <= 3.9 + 1.8 * r0) {
    k3 = 1;
} else {
    k3 = 1 - 0.01 * (0.17 * delta_t * delta_t + 0.72 * delta_t - 2.12);
}

//расчеты k4
c = c_n - c0;
if (c <= 400) {
    k4 = 1;
} else {
    k4 = -0.00045 * c + 1.18;
}

//расчеты уровня комфорта микроклимата
w_comfort = k1 * k2 * k3 * k4;

//результаты
if (w_comfort < 0 && w_comfort >= -0.3) {
    ('холодно, дискомфорт');
} else if (w_comfort < -0.3 && w_comfort >= -0.65) {
    ('прохладно, легкий дискомфорт');
} else if (w_comfort < -0.65 && w_comfort > -1) {
    ('прохладно, но комфортно');
} else if (w_comfort <= -1 || w_comfort >= 1) {
    ('комфорт');
} else if (w_comfort > 0.65 && w_comfort < 1) {
    ('тепло, но комфортно');
} else if (w_comfort > 0.3 && w_comfort <= 0.65) {
    ('тепло, легкий дискомфорт');
} else if (w_comfort > 0 && w_comfort <= 0.3) {
    ('жарко, дискомфорт');
}