// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configura uno o más proveedores de autenticación
  providers: [
    Providers.Credentials({
      // El nombre para mostrar en la pantalla de inicio de sesión
      name: 'Credentials',
      // La lógica para autenticar al usuario
      authorize: async credentials => {
        const user = { id: 1, name: 'Usuario', email: 'usuario@example.com' }; // Aquí deberías validar las credenciales de alguna manera
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.reject(new Error('Credenciales inválidas'));
        }
      },
    }),
  ],
  // Configura la página de inicio de sesión personalizada (opcional)
  pages: {
    signIn: '/login', // La ruta a la página de inicio de sesión personalizada
  },
});
