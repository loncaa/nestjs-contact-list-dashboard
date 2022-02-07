import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  Put,
  HttpStatus,
  HttpException,
  Query,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDTO } from './dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  createContact(@Body() createContactDTO: CreateContactDTO) {
    const contact = this.contactService.createContact(createContactDTO);

    return contact;
  }

  @Get('/:contactID')
  getContact(@Param('contactID') contactId) {
    const contact = this.contactService.getContactById(contactId);
    if (!contact) {
      throw new HttpException(
        `Contact with ${contactId} not found.`,
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
}
