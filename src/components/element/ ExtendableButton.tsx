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
      transition={'400ms'}
      _hover={{ bg: 'gray.400', color: 'gray.800' }}
      justifyContent='space-between'
    >
      <Text overflow='hidden' flexGrow={1}>
        {isExtend && buttonText}
      </Text>
      {icon && (
        <Icon as={icon} h={5} w={5} ml={isExtend ? 3 : 0} transition={'100m'} />
      )}
    </Button>
  )
}

export default ExtendableButton
