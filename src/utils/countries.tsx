import {
  SvgFlagBelarus,
  SvgFlagChina,
  SvgFlagEgypt,
  SvgFlagIndonesia,
  SvgFlagItaly,
  SvgFlagPhilippines,
  SvgFlagRussia,
  SvgFlagSingapore,
  SvgFlagTurkey,
  SvgFlagVietnam,
} from 'src/assets'
import { ICountry } from 'src/models'

const countries: { [key: string]: ICountry } = {
  indonesia: { name: 'Индонезия', flag: <SvgFlagIndonesia /> },
  belarus: { name: 'Беларусь', flag: <SvgFlagBelarus /> },
  china: { name: 'Китай', flag: <SvgFlagChina /> },
  egypt: { name: 'Египет', flag: <SvgFlagEgypt /> },
  italy: { name: 'Италия', flag: <SvgFlagItaly /> },
  philippines: { name: 'Филиппины', flag: <SvgFlagPhilippines /> },
  russia: { name: 'Россия', flag: <SvgFlagRussia /> },
  singapore: { name: 'Сингапур', flag: <SvgFlagSingapore /> },
  turkey: { name: 'Турция', flag: <SvgFlagTurkey /> },
  vietnam: { name: 'Вьетнам', flag: <SvgFlagVietnam /> },
}

export default countries
