import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import Link from 'next/link';


SwiperCore.use([Navigation, Pagination, Autoplay]);
const images = [
    {src: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvZmZhNWZlMmMxYWNjLXdoYXRzYXBwLWltYWdlLTIwMjAtMTAtMDEtYXQtMTAyNTMxLXBtLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEzNTAsImhlaWdodCI6ImF1dG8iLCJmaXQiOiJjb250YWluIn0sImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9LCJmbGF0dGVuIjp0cnVlLCJqcGVnIjp7InF1YWxpdHkiOjkwfX19'},
    {src: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvMmI3YmFiNTNjNmU2LTVjNjBhOTE0LWYxMDktNDFiNy05OTZhLTQ2N2Q0ZWEwMzgzZi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMzUwLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ=='},
    {src: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvYmY0Y2UzZTcyMTYwLThlMjMxZWJjLTVhZWMtNDkwYi1hMTllLWY3Yjk1Nzk3ZDY1YS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMzUwLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ=='},
    {src: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNTMwMDg5ODgzMzIxLTc5MDI1Zjc0LTU0ZTctNGNjNy1hMDU5LTI5NjU5OWYzZTJlOS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMzUwLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ=='},
    {src: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvODlmNzdiZDY0ODJkLTY2ZWE4YWFkLTZjZWQtNGYwYi05ZTg0LTQ1NzU3M2ZkMDVmZi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMzUwLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ=='},
    
];
const Slider = () => {

    return (
        <Swiper pagination loop autoplay  className="w-full">

            {
                images.map((item, idx) => (
                <SwiperSlide key={idx}>
                    <div className="w-full h-60 lg:h-80 text-white flex justify-center items-center bg-gradient-to-r from-red-300 via-red-700 to-red-300">
                        <Link href={`/products/${idx}`}>
                            <a className="w-full">
                                <img className='h-60 lg:h-80 w-full' src={item.src} alt="Slide"/>
                            </a>
                        </Link>
                    </div>
                </SwiperSlide>))
            }
        </Swiper>
    )
};


export default Slider;