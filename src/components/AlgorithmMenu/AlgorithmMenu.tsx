import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';
import { Form, FormGroup, Input, Button, Label, Spinner } from 'reactstrap';
import Joi from 'joi';
import { toast } from 'react-toastify';
import { sendData } from '../../api/services/algorithmService';
import { IKMeansData, kmeansSchema } from './../../api/models/algorithm';

const algorithms = [
  'K-Means',
  'K-Means++',
  'K-Means++ (Manhattan)',
  'K-Nearest Neighbours (KNN)',
  'Линейная регрессия',
];

export default () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('0');
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLInputElement>(null);

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedAlgorithm(event.target.value);
  };

  const renderAlgorithms = () => {
    return algorithms.map((algorithm, index) => (
      <FormGroup className="mt-3" check key={algorithm}>
        <Label check>
          <Input
            type="radio"
            name="algorithmsRadio"
            value={index}
            checked={selectedAlgorithm === index.toString()}
            onChange={handleSelectionChange}
            disabled={index > 2}
          />
          {algorithm}
        </Label>
      </FormGroup>
    ));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputData = inputRef.current?.value ?? '';

    let parsedData: IKMeansData = { dimensions: 0, clusters: 0, values: [] };
    try {
      parsedData = JSON.parse(inputData);
    } catch (error) {
      return toast.error('Данные имеют неверный формат.');
    }

    const { error } = Joi.validate(parsedData, kmeansSchema);
    if (error) return toast.error('Данные имеют неверный формат.');

    try {
      setIsLoading(true);
      const response = await sendData(
        Number.parseInt(selectedAlgorithm),
        parsedData
      );
      setIsLoading(false);
      if (resultRef && resultRef.current)
        resultRef.current.value = JSON.stringify(response.data);
    } catch (ex) {
      toast.error('Произошла ошибка.');
    }
  };

  return (
    <div className={styles.data_container}>
      <Form onSubmit={handleSubmit}>
        <h2>Алгоритмы</h2>
        <div className={styles.algorithms}>
          <FormGroup tag="fieldset">{renderAlgorithms()}</FormGroup>
        </div>
        <FormGroup className={styles.formgroup_container}>
          <h2>Введите данные в формате JSON</h2>
          <Input
            className={styles.data_input}
            type="textarea"
            name="text"
            innerRef={inputRef}
          />
        </FormGroup>
        <Button type="submit" color="primary" block>
          Отправить
        </Button>
        <FormGroup className={styles.formgroup_container}>
          <div className={styles.result_wrapper}>
            <div className={styles.centered}>
              <h2>Результат</h2>
              <div className={styles.right}>
                {isLoading && <Spinner color="info" />}
              </div>
            </div>
          </div>
          <Input
            className={styles.data_input}
            type="textarea"
            name="text"
            innerRef={resultRef}
          />
        </FormGroup>
      </Form>
    </div>
  );
};
