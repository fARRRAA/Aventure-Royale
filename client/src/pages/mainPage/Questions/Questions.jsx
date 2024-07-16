import {
    Box,
    useColorMode,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    IconButton,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import './Questions.css'
export function Questions() {
    const { toggleColorMode, colorMode } = useColorMode();
    const styles={
        border:'1px solid #e2e8f0',
        borderRadius: '10px'
    }
    return (
        <>
        <div className="questions">
                <div className="questions_title">
                    Популярные вопросы
                </div>
                <Box pt={12} position="relative" h="auto" defaultIndex={[1]}>
                    <Accordion allowToggle style={styles}>
                        <AccordionItem m={4}>
                            <h2>
                                <AccordionButton >
                                    <Box flex="1" textAlign="left" style={{outline:'none'}}>
                                    Что включено в стоимость тура?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={2}>
                            В стоимость тура обычно входят услуги, предоставляемые туроператором: перелет, проживание, трансферы, питание, экскурсии и другие дополнительные услуги, указанные в программе тура.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem m={4}>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                    Какие документы мне нужны для поездки?                                 
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={2}>
                            Вам потребуется заграничный паспорт, виза (если необходима для выбранной страны), страховка путешественника, а также билеты на самолет и другие документы, связанные с поездкой.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem m={4}>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                    Каковы условия отмены или изменения бронирования?                                    
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={2}>
                            Условия отмены или изменения бронирования могут различаться в зависимости от тура и туристического агентства. Обычно чем ближе к дате поездки, тем строже условия отмены и изменения.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem m={4}>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                    Есть ли какие-то ограничения или рекомендации для поездки?                                    
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={2}>
                            Некоторые туры могут иметь возрастные ограничения, требования к физической подготовке или знанию языка. Также рекомендуется ознакомиться с культурными особенностями и местными законами выбранной страны.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem m={4}>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                    Как мне связаться в случае чрезвычайной ситуации или проблемы во время поездки?                                    
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={2}>
                            Туристическое агентство предоставит вам контактные данные своего представителя в стране отдыха, а также информацию о том, как обратиться за помощью в случае необходимости. Кроме того, всегда полезно иметь контакты посольства или консульства своей страны в стране, которую посещаете.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </div>
        </>
    )
}