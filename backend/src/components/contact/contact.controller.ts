import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpStatus,
  HttpException,
  Query,
  UsePipes,
} from '@nestjs/common';
import { JoiValidationPipe } from 'src/pipes/joiValidation.pipe';
import { ContactService } from './contact.service';
import { CreateContactDTO } from './dto/contact.dto';
import {
  createContactSchema,
  updateContactSchema,
} from './validation/contact.schema';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) { }

  @Post()
  @UsePipes(new JoiValidationPipe(createContactSchema))
  createContact(@Body() createContactDTO: CreateContactDTO) {
    const contact = this.contactService.createContact(createContactDTO);

    return contact;
  }

  @Get('/favorite')
  getContactFavorites(@Query('first') first, @Query('offset') offset) {
    const contacts = this.contactService.getFavoriteContacts(first, offset);

    return contacts;
  }

  @Get('/:contactID')
  getContact(@Param('contactID') contactId) {
    const contact = this.contactService.getContactById(contactId);
    if (!contact) {
      throw new HttpException(
        `Contact with id ${contactId} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    return contact;
  }

  @Get()
  getContacts(@Query('first') first, @Query('offset') offset) {
    const contacts = this.contactService.getContacts(first, offset);

    return contacts;
  }

  @Put('/:contactID')
  @UsePipes(new JoiValidationPipe(updateContactSchema))
  updateContact(
    @Param('contactID') contactId,
    @Body() createContactDTO: CreateContactDTO,
  ) {
    const contact = this.contactService.updateContact(
      contactId,
      createContactDTO,
    );

    if (!contact) {
      throw new HttpException(
        `Contact with ${contactId} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    return contact;
  }

  @Delete('/:contactID')
  deleteContact(@Param('contactID') contactId) {
    const contact = this.contactService.deleteContact(contactId);

    if (!contact) {
      throw new HttpException(
        `Contact with ${contactId} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    return contact;
  }

  @Post('/favorite/:contactID')
  addFavoriteContact(@Param('contactID') contactId) {
    const contact = this.contactService.addFavoriteContact(contactId);

    if (!contact) {
      throw new HttpException(
        `Contact with ${contactId} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    return contact;
  }

  @Delete('/favorite/:contactID')
  removeFavoriteContact(@Param('contactID') contactId) {
    const contact = this.contactService.deleteFavoriteContact(contactId);

    if (!contact) {
      throw new HttpException(
        `Contact with ${contactId} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    return contact;
  }
}
