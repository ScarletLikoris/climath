import React, { useEffect } from 'react';
const Comfort = ({
    climate,
    setComfortColor,
    set_w_comfort,
    w_comfort,
    comfort,
    setComfort,
}) => {
    //начальные значения

    const q_mt = 93; // метаболистическая теплота,  Вт/м2
    const n = 0; // КПД механической работы
    const w0 = 0; // относительная скорость перемещения в неподвижном воздухе
    const r0 = 0.5; // сопротивление теплопередаче одежды
    let t_v = Math.round(climate.main.temp); // текущая температура С ДАТЧИКОВ
    let fi = climate.main.humidity; // текущая влажность С ДАТЧИКОВ
    let c_n = climate.main.co2; // текущий СО2 С ДАТЧИКОВ
    // const t_v = 25; // текущая температура С ДАТЧИКОВ
    // const fi = 30; // текущая влажность С ДАТЧИКОВ
    // const c_n = 1000; // текущий СО2 С ДАТЧИКОВ
    const t0 = 33.1; // температура открытых участков тела
    const w = 0.2; // подвижность воздуха В ТЕПЛОЕ ВРЕМЯ
    // let w = 0.15; // подвижность воздуха В ХОЛОДНОЕ ВРЕМЯ
    const t_min = 14; // температура поверхностей мин
    const t_max = 20; // температура поверхностей макс
    let c0 = Math.round(Math.random() * (400 - 250) + 250); // концентрация СО2 на улице
    // const c0 = 400; // концентрация СО2 на улице
    const e = 0.8; // интегральная степень черноты излучающей поверхности тела человека
    const o = 5.67 * Math.pow(10, -8); // постоянная Стефана-Больцмана
    const b = 0.8; // коэффициент эффективно излучающей поверхности
    const fi_tr = 0.17; //угловой коэффициент излучения с поверхности тела человека на наиболее холодную ограждающую поверхность

    //начальные переменные

    let q_tp; // внутренняя теплопродукция тела человека
    let t_k; // температура кожного покрова человека
    let p_v; // парциальное давление водяных паров
    let q_dp; // потери теплоты через кожу человека за счет диффузии паров
    let q_ip; // количество теплоты, затрачиваемое на испарение жидкости с поверхности тела человека
    let q_dc; //скрытая теплота, выделяемая в процессе дыхания
    let q_dy; // явная теплота, выделяемая в процессе дыхания
    let q_n; // тепловой поток, который необходимо удалять излучением и конвекцией с поверхности тела человека для обеспечения его комфортного теплового состояния
    let q_l; // лучистый тепловой поток, уходящий с поверхности тела человека
    let t_p0; // средняя радиационная температура помещения
    let q_k; // конвективный тепловой поток, уходящий с поверхности тела человека
    let q_f; // тепловой поток, уходящий с поверхности тела человека
    let q_lm; // коэффициент учета радиационного охлаждения человека
    let delta_t; // максимальная разность температур ограждающих поверхностей
    let c; // избыточная концентрацию СО2 в помещении
    let k1; // коэффициент теплового состояния человека
    let k2; // коэффициент, учитывающий влияние на комфортность микроклимата радиационного охлаждения
    let k3; // коэффициент, учитывающий влияние на комфортность микроклимата асимметрии теплового излучения
    let k4; // коэффициент, учитывающий соответствие качества воздуха нормам, установленным ГОСТ 30494-2011

    //расчеты k1
    q_tp = q_mt * (1 - n);
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
    q_lm =
        e * o * b * fi_tr * (Math.pow(t0 + 273, 4) - Math.pow(t_p0 + 273, 4));
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
    let comfort_w = k1 * k2 * k3 * k4;
    useEffect(() => {
        set_w_comfort(comfort_w);
    }, [climate]);

    //результаты
    useEffect(() => {
        if (w_comfort <= -1) {
            setComfort('холодно, дискомфорт');
            setComfortColor('#FFD4FB');
        } else if (w_comfort > -1 && w_comfort <= -0.3) {
            setComfort('прохладно, легкий дискомфорт');
            setComfortColor('#E0D4FF');
        } else if (w_comfort > -0.3 && w_comfort <= 0.1) {
            setComfort('прохладно, но комфортно');
            setComfortColor('#D4FFFC');
        } else if (w_comfort > 0.1 || w_comfort <= 0.65) {
            setComfort('комфорт');
            setComfortColor('#DAF4CD');
        } else if (w_comfort > 0.65 && w_comfort <= 0.3) {
            setComfort('тепло, но комфортно');
            setComfortColor('#FEFFD4');
        } else if (w_comfort > 0.3 && w_comfort <= 0.1) {
            setComfort('тепло, легкий дискомфорт');
            setComfortColor('#FFF3D4');
        } else if (w_comfort > 0.1) {
            setComfort('жарко, дискомфорт');
            setComfortColor('#FFD4D4');
        }
    });
    return <h2>{comfort}</h2>;
};

export default Comfort;