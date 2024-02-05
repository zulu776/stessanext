import Loading from '@components/Loading';

// Importaciones de componentes personalizados
import LayoutPublic from '@components/LayoutPublic';
import LayoutPrivate from '@components/LayoutPrivate';

function PrivateRoute({ children, rejected, isPublic }) {
  return <LayoutPrivate>{children}</LayoutPrivate>;

  return (
    <div className='container'>
      <section className='card modal'>
        <i className='fas fa-exclamation-triangle icon__action icon__action--modal' />
        <section className='space-y-2 text-center'>
          <h1>¡Ups!</h1>
          <h4>Posible error en validación de datos.</h4>
          <p className='text-center text-sm'>
            Comunícate con soporte técnico de{' '}
            <span className='font-baseBold'>BaseLegal</span>{' '}
            <a href='mailto:contacto@baselegal.co?subject=Contacto+a+BaseLegal'>
              contacto@baselegal.co
            </a>
          </p>
        </section>
      </section>
    </div>
  );
}

export default PrivateRoute;
