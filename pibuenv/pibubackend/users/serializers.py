from rest_framework import serializers
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model, authenticate
import logging

UserModel = get_user_model()
logger = logging.getLogger(__name__)

class UserRegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = '__all__'
	def create(self, clean_data):
		user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'])
		user_obj.username = clean_data['username']
		user_obj.save()
		return user_obj

class UserLoginSerializer(serializers.Serializer):
	username = serializers.CharField()  # replace email with username
	password = serializers.CharField(style={'input_type': 'password'})

	def validate(self, data):
		logger.info(f"Received data: {data}")  # Log received data
		username = data.get('username', '')
		password = data.get('password', '')

		if username and password:
			user = authenticate(request=self.context.get('request'), username=username, password=password)
			logger.info(f"Authentication result: {user}")  # Log authentication result
			if user:
				logger.info(f"User is_active status: {user.is_active}")  # Log user's active status
				if user.is_active:
					data['user'] = user
				else:
					msg = 'User account is disabled.'
					logger.error(msg)
					raise ValidationError(msg)
			else:
				msg = 'Unable to log in with provided credentials.'
				logger.error(msg)
				raise ValidationError(msg)
		else:
			msg = 'Must include "username" and "password".'
			logger.error(msg)
			raise ValidationError(msg)
		return data

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ('email', 'username')