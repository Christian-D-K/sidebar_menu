import { Icon, Button, Text } from '@chakra-ui/react'
import { extendableButtonPropsType } from '../../types/ExtendableButton.type'

const ExtendableButton = ({
  buttonText,
  isExtend,
  icon,
  extendWidth,
  shrinkWidth,
  height,
  onMouseEvent,
}: extendableButtonPropsType) => {
  return (
    <Button
      w={isExtend ? extendWidth : shrinkWidth}
      h={height}
      onMouseEnter={onMouseEvent}
      fontSize='md'
      transition={'800ms'}
      _hover={{ bg: 'gray.400', color: 'gray.800' }}
    >
      {isExtend && (
        <Text overflow='hidden' flexGrow={1}>
          {isExtend && buttonText}
        </Text>
      )}
      {icon && <Icon as={icon} h={5} w={5} />}
    </Button>
  )
}

export default ExtendableButton
