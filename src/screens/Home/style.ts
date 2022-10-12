import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const {height: GlobalHeight} = Dimensions.get('window');

export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  subContainer: {
    marginVertical: 20,
    padding: 10,
    borderColor: COLORS.primary,
    borderRadius: 20,
  },
  txtField: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  txtValue: {
    color: COLORS.text,
    fontWeight: '300',
  },
});

export const itemStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 15,
    flexDirection: 'row',
    width: '90%',
    height: GlobalHeight * 0.2,
  },
  imgContainer: {
    flex: 0.8,
    borderRadius: 15,
    width: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginHorizontal: '5%',
    paddingVertical: '10%',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  infoName: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  infoSymbol: {
    color: COLORS.text,
    fontWeight: '500',
  },
  infoDescription: {
    color: COLORS.text,
    fontWeight: '300',
  },
});
