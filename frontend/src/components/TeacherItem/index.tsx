/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
  id: number;
    name: string;
    avatar: string;
    bio: string;
    subject: string;
    cost: number;
    whatsapp: string;
}

interface TeacherProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherProps> = ({ teacher }) => {
  const createNewConnection = () => {
    api.post('/connections', { user_id: teacher.id });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={createNewConnection} href={`https://wa.me/+55${teacher.whatsapp}`} target="_blank">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
