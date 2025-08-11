import React from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';

const FAQsModal = ({onClose}) => {
    return (
      <div id="my_modal_5" className="fixed w-auto lg:w-full h-full grid place-items-center z-50 bg-[#0006] top-0 bottom-0 left-0 right-0 overflow-scroll">
                    <div className={`p-5 bg-base-100 rounded-lg max-w-[400px]  space-y-2`}>

                        <div className='flex justify-between'>
                            <h3 className="text-2xl">FAQs</h3>
                            <label className='z-[999]'>
                                <button className='btn btn-outline' onClick={onClose}><RiCloseLargeFill size={20} /></button>
                            </label>
                        </div>

                        <div className="space-y-2">
                            {/* Q1 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" defaultChecked />
                                <div className="collapse-title font-semibold">
                                    How do I post a lost or found item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Click on the "Add Item" button, fill in the details such as category, description, and location, then submit.
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    Do I need to create an account to post an item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Yes, creating an account helps verify posts and allows you to manage or edit your listings.
                                </div>
                            </div>

                            {/* Q3 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    Is it free to post a lost or found item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Yes, posting items on our platform is completely free.
                                </div>
                            </div>

                            {/* Q4 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    What should I include when reporting a lost item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Include a clear description, location where it was lost, date, and any identifiable marks. A photo is highly recommended.
                                </div>
                            </div>

                            {/* Q5 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    How do I search for my lost item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Use the search bar or browse by category. You can also filter by location and date.
                                </div>
                            </div>

                            {/* Q6 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    I found something, what should I do?
                                </div>
                                <div className="collapse-content text-sm">
                                    Post it on the site with details about where and when you found it, but avoid sharing overly specific identifiers so the rightful owner can prove it’s theirs.
                                </div>
                            </div>

                            {/* Q7 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    How do I confirm the rightful owner of a found item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Ask the person to describe specific details or provide proof of ownership before returning the item.
                                </div>
                            </div>

                            {/* Q8 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    How do I contact someone who posted an item?
                                </div>
                                <div className="collapse-content text-sm">
                                    Use the messaging system or contact form provided on their listing. Do not share personal information until necessary.
                                </div>
                            </div>

                            {/* Q9 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    How do I remove my listing once my item is found?
                                </div>
                                <div className="collapse-content text-sm">
                                    Go to your dashboard, find your listing, and click “Remove” or “Mark as Resolved.”
                                </div>
                            </div>

                            {/* Q10 */}
                            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold">
                                    Is the platform responsible for the items listed?
                                </div>
                                <div className="collapse-content text-sm">
                                    No, we only provide the platform for connecting people. All exchanges are the responsibility of the individuals involved.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    );
};

export default FAQsModal;