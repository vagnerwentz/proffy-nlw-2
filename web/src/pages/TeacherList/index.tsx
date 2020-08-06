import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import Input from '../../components/Input';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import './styles.css';

function TeacherList() {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
   
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys dispoíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select 
            name="subject"
            value={subject}
            onChange={e => { setSubject(e.target.value) }}
            optionLabel="Selecione a matéria"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Educação Física', label: 'Educação Física'},
              { value: 'Física', label: 'Física'},
              { value: 'Química', label: 'Química'},
              { value: 'História', label: 'História'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'Português', label: 'Português'},
            ]} 
          />
           <Select 
            name="week_day"
            value={week_day}
            onChange={e => { setWeekDay(e.target.value) }} 
            optionLabel="Selecione um dia"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda-feira'},
              { value: '2', label: 'Terça-feira'},
              { value: '3', label: 'Quarta-feira'},
              { value: '4', label: 'Quinta-feira'},
              { value: '5', label: 'Sexta-feira'},
              { value: '6', label: 'Sábado'},
            ]} 
          />
          <Input 
            type="time" 
            value={time}
            onChange={e => { setTime(e.target.value) }}
            name="time" 
            label="Hora" 
          />
          
          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {
          teachers.length ? 
            teachers.map((teacher: Teacher) => {
              return <TeacherItem key={teacher.id} teacher={teacher} />
            })
          :
          <h3> 
            Preencha os dados acima e clique em <span>
            buscar</span> para aparecer 
            um professor
          </h3>
        }
      </main>
    </div>
  );
}

export default TeacherList;