import Link from 'next/link';



const Footer = ({}) => {


    return (
        <footer className="w-full hidden md:block bg-pri">
            <div className="container border-gray-800 mx-auto py-16 px-2 text-center flex justify-evenly text-gray-400">
               <section className="section text-sm">
                   <h2 className="font-medium mb-4 text-lg text-left text-white">Download</h2>
                   <ul className="w-full">
                       <li className="w-full mb-4">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/120px-Google_Play_Store_badge_EN.svg.png" alt="Google Play Badge"/>
                       </li>
                       <li className="w-full mb-2">
                           <Link href="/google-play" >
                                <svg width="119.664" height="40" viewBox="0 0 119.664 40" className="mx-auto"><path d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013A13.215 13.215 0 005.517.19a6.665 6.665 0 00-1.9.627 6.438 6.438 0 00-1.62 1.18A6.258 6.258 0 00.82 3.617a6.601 6.601 0 00-.625 1.903 12.993 12.993 0 00-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921a12.992 12.992 0 00.18 2.002 6.588 6.588 0 00.624 1.905A6.208 6.208 0 001.998 38a6.274 6.274 0 001.618 1.179 6.7 6.7 0 001.901.63 13.455 13.455 0 002.004.177c.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.36 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.279 13.279 0 002-.178 6.804 6.804 0 001.908-.63A6.277 6.277 0 00117.666 38a6.395 6.395 0 001.182-1.614 6.604 6.604 0 00.619-1.905 13.506 13.506 0 00.185-2.002c.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.507 13.507 0 00-.185-2.003 6.618 6.618 0 00-.62-1.903 6.466 6.466 0 00-2.798-2.8 6.768 6.768 0 00-1.908-.627 13.044 13.044 0 00-2-.176c-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z" fill="#a6a6a6"></path><path d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.687 12.687 0 01-1.87-.164 5.884 5.884 0 01-1.656-.548 5.406 5.406 0 01-1.397-1.016 5.32 5.32 0 01-1.02-1.397 5.722 5.722 0 01-.544-1.657 12.414 12.414 0 01-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 01.165-1.872 5.755 5.755 0 01.544-1.662 5.373 5.373 0 011.015-1.398 5.565 5.565 0 011.402-1.023 5.823 5.823 0 011.653-.544A12.586 12.586 0 017.543.887l.902-.012h102.769l.913.013a12.385 12.385 0 011.858.162 5.938 5.938 0 011.671.548 5.594 5.594 0 012.415 2.42 5.763 5.763 0 01.535 1.649 12.995 12.995 0 01.174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.731 12.731 0 01-.17 1.853 5.739 5.739 0 01-.54 1.67 5.48 5.48 0 01-1.016 1.386 5.413 5.413 0 01-1.4 1.022 5.862 5.862 0 01-1.668.55 12.542 12.542 0 01-1.869.163c-.293.007-.6.011-.897.011l-1.084.002z"></path><g data-name="<Group>"><g data-name="<Group>" fill="#fff"><path data-name="<Path>" d="M24.769 20.3a4.949 4.949 0 012.356-4.151 5.066 5.066 0 00-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 00-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 001.52-3.092 4.782 4.782 0 01-2.92-4.4zM22.037 12.21a4.872 4.872 0 001.115-3.49 4.957 4.957 0 00-3.208 1.66A4.636 4.636 0 0018.8 13.74a4.1 4.1 0 003.237-1.53z"></path></g><g fill="#fff"><path d="M42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039zm-4.243-1.55h3.752l-1.85-5.446h-.051zM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484H46.63V21.442h1.8v1.506h.033a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zM65.125 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zM71.71 27.036c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137a5.808 5.808 0 00.611-.043v1.463a5.104 5.104 0 01-1.032.086c-1.833 0-2.548-.689-2.548-2.445v-5.189h-1.316v-1.472h1.316V19.3zM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106zM96.186 21.442h1.773v1.541h.043a2.16 2.16 0 012.177-1.635 2.866 2.866 0 01.637.069v1.738a2.598 2.598 0 00-.835-.112 1.873 1.873 0 00-1.937 2.083v5.37h-1.858zM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 002.436 2.564 2.048 2.048 0 002.09-1.273zm-6.282-2.702h4.526a2.177 2.177 0 00-2.22-2.298 2.292 2.292 0 00-2.306 2.298z"></path></g></g><g data-name="<Group>"><g fill="#fff"><path d="M37.826 8.731a2.64 2.64 0 012.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73zm-1.228 5.123h1.125a1.876 1.876 0 001.967-2.146 1.881 1.881 0 00-1.967-2.134h-1.125zM41.68 12.444a2.133 2.133 0 114.248 0 2.134 2.134 0 11-4.247 0zm3.334 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM51.573 14.698h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889zM53.854 10.195h.855v.715h.066a1.348 1.348 0 011.344-.802 1.465 1.465 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 00-1.075 1.141v2.635h-.888zM59.094 8.437h.888v6.26h-.888zM61.218 12.444a2.133 2.133 0 114.247 0 2.134 2.134 0 11-4.247 0zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM66.4 13.424c0-.81.604-1.278 1.676-1.344l1.22-.07v-.389c0-.475-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 01-1.353.707 1.36 1.36 0 01-1.501-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.062 1.062 0 001.166-.983zM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 011.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 01-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zM79.23 12.444a2.133 2.133 0 114.247 0 2.134 2.134 0 11-4.247 0zm3.333 0c0-.976-.438-1.547-1.208-1.547-.772 0-1.207.571-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zM84.67 10.195h.855v.715h.066a1.348 1.348 0 011.344-.802 1.465 1.465 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 00-1.075 1.141v2.635h-.889zM93.515 9.074v1.141h.976v.749h-.976v2.315c0 .472.194.679.637.679a2.967 2.967 0 00.339-.021v.74a2.916 2.916 0 01-.484.046c-.988 0-1.381-.348-1.381-1.216v-2.543h-.715v-.749h.715V9.074zM95.705 8.437h.88v2.481h.07a1.386 1.386 0 011.374-.806 1.483 1.483 0 011.55 1.679v2.907h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.052 1.052 0 00-1.134 1.142v2.63h-.888zM104.761 13.482a1.828 1.828 0 01-1.95 1.303 2.045 2.045 0 01-2.081-2.325 2.077 2.077 0 012.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 001.2 1.29 1.08 1.08 0 001.07-.546zm-3.126-1.451h2.275a1.086 1.086 0 00-1.109-1.167 1.152 1.152 0 00-1.166 1.167z"></path></g></g></svg>
                            </Link>
                       </li>
                   </ul>
               </section>
               <section className="section text-sm text-left">
                   <h2 className="font-medium mb-4 text-lg text-white">Menu</h2>
                   <ul className="w-full text-light">
                       {
                           ['Privacy Policy', 'Cookie Policy', 'Purchasing Policy', 'Terms & Conditions', 'Career']
                           .map((item, idx) => <li key={idx} className="w-full pb-2 hover:opacity-50"><Link href="/privacy" >{item}</Link></li>)
                       }
                       
                   </ul>
               </section>
               <section className="section mb-8 text-left text-sm text-light">
                   <h2 className="font-medium text-lg mb-4 text-left text-white">Contact Us</h2>
                   <p className="mb-2 ">
                    House #8, Road # 14,<br/>
                    Dhanmondi, Dhaka-1209.
                   </p>
                   <p className="mb-2 ">
                    Email: support@evaly.com.bd
                   </p>
                   <p className="">
                    Contact no: 09638111666
                   </p>
               </section>
               <section className="section mb-8 text-left">
                   <h2 className="font-medium text-left text-lg mb-4 text-white">Get in Touch</h2>
                   <ul className="flex w-full justify-between">
                        <li className="facebook w-10 h-10 rounded px-2 py-3 cursor-pointer flex justify-center items-center mr-2">
                           <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto"><path d="M3.02293 16L3 9H0V6H3V4C3 1.3008 4.67151 0 7.07938 0C8.23277 0 9.22406 0.08587 9.51294 0.12425V2.94507L7.84296 2.94583C6.53343 2.94583 6.27987 3.5681 6.27987 4.48124V6H10L9 9H6.27986V16H3.02293Z" fill="#A7ABBD"></path></svg>
                        </li>
                        <li className="instagram w-10 h-10 rounded px-2 py-3 cursor-pointer flex justify-center items-center mr-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1446 4.85164C12.6748 4.85164 13.1046 4.42183 13.1046 3.89164C13.1046 3.36145 12.6748 2.93164 12.1446 2.93164C11.6144 2.93164 11.1846 3.36145 11.1846 3.89164C11.1846 4.42183 11.6144 4.85164 12.1446 4.85164Z" fill="#A7ABBD"></path><path fillRule="evenodd" clipRule="evenodd" d="M4 8C4 10.206 5.794 12 8 12C10.206 12 12 10.206 12 8C12 5.794 10.206 4 8 4C5.794 4 4 5.794 4 8ZM6 8C6 6.897 6.897 6 8 6C9.103 6 10 6.897 10 8C10 9.103 9.103 10 8 10C6.897 10 6 9.103 6 8Z" fill="#A7ABBD"></path><path fillRule="evenodd" clipRule="evenodd" d="M4 16H12C14.056 16 16 14.056 16 12V4C16 1.944 14.056 0 12 0H4C1.944 0 0 1.944 0 4V12C0 14.056 1.944 16 4 16ZM2 4C2 3.065 3.065 2 4 2H12C12.935 2 14 3.065 14 4V12C14 12.935 12.935 14 12 14H4C3.047 14 2 12.953 2 12V4Z" fill="#A7ABBD"></path></svg>
                        </li>
                        <li className="youtube w-10 h-10 rounded px-2 py-3 cursor-pointer flex justify-center items-center mr-2">
                            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto"><path d="M21.5 7.93423C21.5 7.88267 21.5 7.82407 21.4977 7.7561C21.4953 7.56626 21.4906 7.35298 21.4859 7.12564C21.4672 6.47173 21.4344 5.82017 21.3828 5.2061C21.3125 4.36001 21.2094 3.65454 21.0687 3.12485C20.9204 2.57208 20.6295 2.06794 20.2252 1.66281C19.8209 1.25769 19.3173 0.965782 18.7648 0.81626C18.1016 0.638135 16.8031 0.527978 14.975 0.46001C14.1055 0.427197 13.175 0.406103 12.2445 0.394385C11.9187 0.389697 11.6164 0.387354 11.3445 0.38501H10.6555C10.3836 0.387354 10.0813 0.389697 9.75547 0.394385C8.825 0.406103 7.89453 0.427197 7.025 0.46001C5.19687 0.530322 3.89609 0.640478 3.23516 0.81626C2.6825 0.965415 2.17876 1.2572 1.7744 1.66238C1.37004 2.06756 1.07928 2.5719 0.93125 3.12485C0.788281 3.65454 0.6875 4.36001 0.617188 5.2061C0.565625 5.82017 0.532812 6.47173 0.514062 7.12564C0.507031 7.35298 0.504687 7.56626 0.502344 7.7561C0.502344 7.82407 0.5 7.88267 0.5 7.93423V8.06548C0.5 8.11704 0.5 8.17564 0.502344 8.2436C0.504687 8.43345 0.509375 8.64673 0.514062 8.87407C0.532812 9.52798 0.565625 10.1795 0.617188 10.7936C0.6875 11.6397 0.790625 12.3452 0.93125 12.8749C1.23125 13.9975 2.1125 14.8834 3.23516 15.1834C3.89609 15.3616 5.19687 15.4717 7.025 15.5397C7.89453 15.5725 8.825 15.5936 9.75547 15.6053C10.0813 15.61 10.3836 15.6124 10.6555 15.6147H11.3445C11.6164 15.6124 11.9187 15.61 12.2445 15.6053C13.175 15.5936 14.1055 15.5725 14.975 15.5397C16.8031 15.4694 18.1039 15.3592 18.7648 15.1834C19.8875 14.8834 20.7687 13.9999 21.0687 12.8749C21.2117 12.3452 21.3125 11.6397 21.3828 10.7936C21.4344 10.1795 21.4672 9.52798 21.4859 8.87407C21.493 8.64673 21.4953 8.43345 21.4977 8.2436C21.4977 8.17564 21.5 8.11704 21.5 8.06548V7.93423ZM19.8125 8.0561C19.8125 8.10532 19.8125 8.15923 19.8102 8.22251C19.8078 8.40532 19.8031 8.60688 19.7984 8.82485C19.782 9.44829 19.7492 10.0717 19.7 10.6506C19.6367 11.4053 19.5477 12.0241 19.4375 12.4389C19.2922 12.9803 18.8656 13.4092 18.3266 13.5522C17.8344 13.6834 16.5945 13.7889 14.9094 13.8522C14.0562 13.885 13.1375 13.9061 12.2211 13.9178C11.9 13.9225 11.6023 13.9249 11.3352 13.9249H10.6648L9.77891 13.9178C8.8625 13.9061 7.94609 13.885 7.09063 13.8522C5.40547 13.7866 4.16328 13.6834 3.67344 13.5522C3.13437 13.4069 2.70781 12.9803 2.5625 12.4389C2.45234 12.0241 2.36328 11.4053 2.3 10.6506C2.25078 10.0717 2.22031 9.44829 2.20156 8.82485C2.19453 8.60688 2.19219 8.40298 2.18984 8.22251C2.18984 8.15923 2.1875 8.10298 2.1875 8.0561V7.9436C2.1875 7.89438 2.1875 7.84048 2.18984 7.7772C2.19219 7.59438 2.19688 7.39282 2.20156 7.17485C2.21797 6.55142 2.25078 5.92798 2.3 5.34907C2.36328 4.59438 2.45234 3.97563 2.5625 3.56079C2.70781 3.01938 3.13437 2.59048 3.67344 2.44751C4.16562 2.31626 5.40547 2.21079 7.09063 2.14751C7.94375 2.1147 8.8625 2.0936 9.77891 2.08188C10.1 2.0772 10.3977 2.07485 10.6648 2.07485H11.3352L12.2211 2.08188C13.1375 2.0936 14.0539 2.1147 14.9094 2.14751C16.5945 2.21313 17.8367 2.31626 18.3266 2.44751C18.8656 2.59282 19.2922 3.01938 19.4375 3.56079C19.5477 3.97563 19.6367 4.59438 19.7 5.34907C19.7492 5.92798 19.7797 6.55142 19.7984 7.17485C19.8055 7.39282 19.8078 7.59673 19.8102 7.7772C19.8102 7.84048 19.8125 7.89673 19.8125 7.9436V8.0561ZM8.91406 11.1405L14.3516 7.97642L8.91406 4.85923V11.1405Z" fill="#fff"></path></svg>
                        </li>
                   </ul>
               </section>
            </div>
            <div className="w-full bg-dark">
                <p className="w-full py-5 text-center text-sm text-gray-700">&copy; 2022 Glamour World Limited. All rights reserved.</p>
            </div>
            <style jsx>{`
                .facebook {
                    background: #3b5897;
                }
                .instagram {
                    background: #3f729b;
                }
                .youtube {
                    background: #ff0000a6;
                }
            `}</style>
        </footer>
    )
};

export default Footer;