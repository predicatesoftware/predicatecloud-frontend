import React from 'react';
import styles from './styles.module.scss';
import NetworkLayers from './../NetworkLayers';
import InfoCard from './../InfoCard/index';

export default () => {
  return (
    <>
      <h2>Встречайте Predicate.Cloud</h2>
      <h1>
        Машинное обучение
        <br />
        со <span>скоростью света</span>
      </h1>
      <div className={styles.features_container}>
        <div className={styles.features}>
          <p>
            Непревзойдённая производительность
            <br />
            для самых сложных задач.
          </p>
          <p>
            Передовые инструменты в&nbsp;области
            <br />
            машинного обучения и&nbsp;Data Science.
          </p>
          <p>
            Интуитивное построение и&nbsp;обучение моделей
            <br />
            с&nbsp;визуализацией процесса.
          </p>
          <p>Адаптация к&nbsp;проектам любой сложности.</p>
        </div>
        <NetworkLayers />
      </div>
      <div className={styles.cards_container}>
        <InfoCard
          caption="Создайте аккаунт"
          buttonCaption="Создать"
          link="/register"
        >
          Получите ранний доступ к&nbsp;последним версиям библиотек Predicate.ML
          и&nbsp;Predicate.KMeans.
        </InfoCard>
        <InfoCard
          caption="Используйте библиотеки"
          buttonCaption="Попробовать"
          link="https://github.com/predicatesoftware"
          external
        >
          Ознакомьтесь с&nbsp;особенностями проекта. Теперь на&nbsp;C++&nbsp;20.
        </InfoCard>
        <InfoCard
          caption="Вступите в&nbsp;команду"
          buttonCaption="Вступить"
          link="https://twitter.com/predicateinc"
          external
        >
          Подпишитесь на&nbsp;наши новости, чтобы&nbsp;не упустить обновления.
        </InfoCard>
      </div>
    </>
  );
};
