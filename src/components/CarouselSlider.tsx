import React, { PureComponent } from 'react';
import { Image } from 'react-native';
import { Box } from 'react-native-design-utility';
import Carousel, {Pagination} from 'react-native-snap-carousel';

interface Props {
    navigation?: any;
}
interface State {

}

const images: any = [
    require('../assets/img/food1.png'),
    require('../assets/img/food2.png'),
    require('../assets/img/food3.png'),
]

class CarouselSlider extends PureComponent<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {}
    }

    get pagination () {
        return (
            <Pagination
              dotsLength={images.length}
              activeDotIndex={1}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }



    render() {
        return (
            <Box f={1} bg="white">
                <Carousel
                    // ref={(c) => { this._carousel = c; }}
                    data={images}
                    renderItem={({item}) => (
                        <Image source={item} />
                    )}
                    sliderWidth={400}
                    itemWidth={350}
                    layout="default"
                    autoplay={true}
                    loop={true}
                    />
                    {/* {this.pagination} */}
            </Box>
        )
    }
}

export default CarouselSlider;