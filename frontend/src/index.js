import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Создаем отдельный компонент для проверки соединения
// const ConnectionChecker = () => {
//     const [backendStatus, setBackendStatus] = React.useState('Checking backend connection...');

//     React.useEffect(() => {
//         const checkBackend = async () => {
//         try {
//             const response = await fetch('/api/data');
//             if (!response.ok) throw new Error('Backend unavailable');
//             setBackendStatus('✓ Backend connected');
//         } catch (error) {
//             setBackendStatus('✗ Backend connection error: ' + error.message);
//         }
//     };
    
//     checkBackend();
//     }, []);

//     return (
//         <div style={{
//         position: 'fixed',
//         top: 10,
//         right: 10,
//         padding: '10px',
//         background: backendStatus.startsWith('✓') ? '#e8f5e9' : '#ffebee',
//         border: `1px solid ${backendStatus.startsWith('✓') ? '#4caf50' : '#f44336'}`,
//         borderRadius: '4px',
//         zIndex: 1000
//         }}>
//         {backendStatus}
//         </div>
//     );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <ConnectionChecker /> */}
        <App />
    </React.StrictMode>
);