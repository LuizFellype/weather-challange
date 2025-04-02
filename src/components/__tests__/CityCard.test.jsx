import {render} from '@testing-library/react'
import CityCard from '../CityCard'
import {allWeathers} from '../../mock-db/weather'

const [lowTempCity, midTempCity, highTempCity] = allWeathers

describe('CityCard temperature color coding', () => {
    test('should render blue for 5°C or below temperature', () => {
        const { asFragment } = render(<CityCard data={lowTempCity}/>)
        
        expect(asFragment()).toMatchSnapshot()
    })
    test('should render orange for temperature between 5°C and 26°C', () => {
        const { asFragment } = render(<CityCard data={midTempCity}/>)
        
        expect(asFragment()).toMatchSnapshot()
    })
    test('should render red for temperature above 25°C', () => {
        const { asFragment } = render(<CityCard data={highTempCity}/>)
        
        expect(asFragment()).toMatchSnapshot()
    })
    
})