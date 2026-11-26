/* Ficha antiga desativada: o app agora mora em https://danfermartins.github.io/leo-treinos/alunos/priscila/
   Este service worker apaga só o cache antigo desta ficha e se desinstala. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.delete('leo-treino-priscila-v2')
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(cs => cs.forEach(c => c.navigate('https://danfermartins.github.io/leo-treinos/alunos/priscila/')))
  );
});
