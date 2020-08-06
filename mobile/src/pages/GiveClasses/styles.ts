import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, /* Ocupar a tela toda */
    justifyContent: 'center',  /* Ficar ao centro verticalmente*/
    backgroundColor: '#8257e5',
    padding: 40, /* Distanciamento de 40 em todos os lados */
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  }
});

export default styles;