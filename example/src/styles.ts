import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    height: 96,
    justifyContent: 'flex-end',
    paddingBottom: 6,
  },
  textTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    backgroundColor: '#E8EBE4',
  },
  button: {
    width: 56,
    borderRadius: 28,
    height: 56,
    marginVertical: 10,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
  },
});
