# 📋 Projet ReactJS – Tests Unitaires avec API REST

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Testing Library](https://img.shields.io/badge/Testing_Library-14.0.0-red.svg)
![Jest](https://img.shields.io/badge/Jest-29.4.0-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Contributors](https://img.shields.io/badge/Contributors-4-orange.svg)

## 🎯 Description du projet

Ce projet a été développé dans le cadre de l’activité pédagogique **Tests unitaires d’une application ReactJS**.  
Il met en œuvre une application React consommant une API REST externe (Fake Store API) avec des **tests unitaires complets** réalisés à l’aide de **Jest** et **React Testing Library**.

## 📚 Contexte pédagogique

- **Module** : M202 – Approche Agile  
- **Activité** : N°02 – Tests unitaires  
- **Type** : Pratique  
- **Durée** : 2 heures  
- **Formateur** : M. Said GAHI  
- **Groupe** : DEVOWFS201  

## 👥 Équipe de développement

| Nom | Rôle | Contribution |
|-----|------|--------------|
| Said GAHI | Formateur / Concepteur | Conception pédagogique, supervision |
| Hamza Kousra | Développeur | Composants React, tests unitaires |
| Marouane Radi | Développeur | Service API, configuration des tests |
| Ayoub Aguezar | Développeur | Documentation, CI/CD |

--- 
<p align="center">
  <img src="assets/images/pictureOfUs.jpeg" width="600">
</p>


## 🚀 Fonctionnalités

- Consommation d’API REST avec `fetch`
- Utilisation des Hooks React (`useState`, `useEffect`)
- Gestion des états (chargement, erreur, données)
- Tests unitaires avec mocks
- Simulation d’API avec Jest
- Tests asynchrones avec `waitFor`

## 🏗️ Structure du projet

```
test-unitaires-react/
├── src/
│   ├── components/
│   │   └── ProductList.jsx
│   ├── services/
│   │   └── api.js
│   ├── __tests__/
│   │   └── ProductList.test.jsx
│   ├── App.js
│   └── index.js
├── .github/workflows/
│   └── tests.yml
├── package.json
├── README.md
└── .gitignore
```

## ⚙️ Installation

```bash
git clone https://github.com/votre-username/test-unitaires-react.git
cd test-unitaires-react
npm install
npm start
```

## 🧪 Tests

```bash
npm test
npm test -- --coverage
```

## 📄 Licence

MIT
