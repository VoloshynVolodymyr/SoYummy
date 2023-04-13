import React from 'react';
import css from './RecipeRpeparation.module.css';
import defaultImage from '../../../assets/images/CheckBoxRecipe/notFoundBig.jpg';

const RecipeRpeparation = ({
  instructions,
  preview,
  previewImg,
  youtube,
  fullImg,
}) => {
  let i = 0;
  const instructionList = instructions.split('\r\n');
  return (
    <div className={css.wrapper}>
      <div className={css.itemsContainer}>
        <span className={css.title}>Recipe Preparation</span>
        <ul className={css.descriptionWrapper}>
          {instructionList.map((item, index) => (
            <li key={index} className={css.itemWrapper}>
              {item.length > 1 && (
                <div className={css.itemNumber}>{(i += 1)}</div>
              )}
              {item.length > 1 && (
                <span className={css.description}>{item}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={css.imageWrapper}>
        {preview ? (
          <img src={preview} alt="recipe" className={css.image} />
        ) : (
          <img
            src={previewImg ? previewImg : defaultImage}
            alt="recipe"
            className={css.image}
          />
        )}
      </div>
    </div>
  );
};

export default RecipeRpeparation;
